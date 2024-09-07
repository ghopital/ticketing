import express, { Request, Response, NextFunction } from "express";
import { requireAuth, validateRequest } from "@ghopitaltickets/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import { TicketCreatedPublisher } from "../events/publisher/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than zero"),
  ],
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, price } = req.body;
      const ticket = new Ticket({ title, price, userId: req.currentUser!.id });
      await ticket.save();

      const ticketCreatedPublisher = new TicketCreatedPublisher(
        natsWrapper.client
      );

      const data = {
        id: ticket.id,
        title: ticket.title,
        price: ticket.price,
        userId: req.currentUser!.id,
        version: ticket.version
      };

      await ticketCreatedPublisher.publish(data);

      res.status(201).send(ticket);
    } catch (err) {
      console.log("Error publishing event", err);
    }
  }
);

export { router as createTicketRouter };
