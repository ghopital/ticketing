import {
  requireAuth,
  validateRequest,
  NotFoundError,
  NotAuthorizedError,
  BadRequestError,
} from "@ghopitaltickets/common";
import express, { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import { TicketUpdatedPublisher } from "../events/publisher/ticket-updated-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.put(
  "/api/tickets/:id",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than zero"),
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return next(new NotFoundError());
    }
    if (ticket.userId !== req.currentUser!.id) {
      return next(new NotAuthorizedError());
    }

    if (ticket.orderId) {
      return next(
        new BadRequestError(
          "Cannot update a ticket that is associated with an order"
        )
      );
    }

    ticket.title = req.body.title || ticket.title;
    ticket.price = req.body.price || ticket.price;

    ticket.set({
      title: req.body.title,
      price: req.body.price,
    });

    await ticket.save();

    const ticketUpdatedPublisher = new TicketUpdatedPublisher(
      natsWrapper.client
    );

    const data = {
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: req.currentUser!.id,
      version: ticket.version,
    };

    await ticketUpdatedPublisher.publish(data);

    res.send(ticket);
  }
);

export { router as updateTicketRouter };
