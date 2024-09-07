import express, { Response, Request, NextFunction } from "express";
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  OrderStatus,
  BadRequestError,
} from "@ghopitaltickets/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import { Order } from "../models/order";
import { OrderCreatedPublisher } from "../events/publishers/order-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const EXPIRATION_WINDOWS_SECONDS = 5 * 60;

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      /*.custom((input: string) => {
        mongoose.Types.ObjectId.isValid(input);
      })*/
      .withMessage("Ticket ID is required"),
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    const { ticketId } = req.body;
    const ticket = await Ticket.findById(ticketId);
    console.log(ticket);
    if (!ticket) {
      return next(new NotFoundError());
    }
    const isReserved = await ticket.isReserved();
    if (isReserved) {
      return next(new BadRequestError("Ticket already reserved"));
    }

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOWS_SECONDS);

    const order = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expiresAt: expiration,
      ticket,
    });

    await order.save();

    //Publish an event saying that the order has been created
    const orderPublisher = new OrderCreatedPublisher(natsWrapper.client);
    orderPublisher.publish({
      id: order.id,      
      version: order.version,
      userId: order.userId,
      status: order.status,
      expiresAt: order.expiresAt.toISOString(),
      ticket: {
        id: order.ticket.id,
        price: order.ticket.price
      },
    });
    res.status(201).send(order);
  }
);

export { router as newOrdersRouter };
