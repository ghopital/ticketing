import express, { NextFunction, Request, Response } from "express";
import { NotFoundError } from "@ghopitaltickets/common";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.get(
  "/api/tickets",
  async (req: Request, res: Response, next: NextFunction) => {
    const tickets = await Ticket.find({orderId: undefined});

    if (!tickets) {
      return next(new NotFoundError());
    }

    res.send(tickets);
  }
);

router.get(
    "/api/tickets/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const ticket = await Ticket.findById(req.params.id);
  
      if (!ticket) {
        return next(new NotFoundError());
      }
  
      res.send(ticket);
    }
  );

export { router as showTicketRouter };
