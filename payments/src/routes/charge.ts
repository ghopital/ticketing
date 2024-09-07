import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
  requireAuth,
  validateRequest,
} from "@ghopitaltickets/common";
import express, { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
import { Order } from "../models/order";
import { stripe } from "../stripe";
import { Payment } from "../models/payments";
import { PaymentCreatedPublisher } from "../events/publishers/payment-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/payments",
  requireAuth,
  [body("token").not().isEmpty(), body("orderId").not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    const { token, orderId } = req.body;
    const order = await Order.findById(orderId);
    if (!order) {
      return next(new NotFoundError());
    }
    if (order.userId !== req.currentUser!.id) {
      return next(new NotAuthorizedError());
    }
    if (order.status === OrderStatus.Cancelled) {
      return next(new BadRequestError("Order cancelled"));
    }

    const response = await stripe.charges.create({
      amount: order.price * 100,
      currency: "usd",
      source: token,
      description: `Purchased tickets for order ${order.id}`,
    });
    /*
    const charges = await stripe.charges.list();
    const charge = charges.data.find(charge => charge.description?.indexOf(order.id) != -1 );
    console.log(charges);
    console.log(charge)
    */

    const payment = Payment.build({
      orderId,
      stripeId: response.id,
    });

    await payment.save();

    await new PaymentCreatedPublisher(natsWrapper.client).publish({
      id: payment.id,
      orderId: payment.orderId,
      stripeId: payment.stripeId,
    });

    res.status(201).send({ id: payment.id});
  }
);

export { router as createChargeRouter };
