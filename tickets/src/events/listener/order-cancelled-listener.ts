import {
  Listener,
  OrderCancelledEvent,
  Subjects,
} from "@ghopitaltickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publisher/ticket-updated-publisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const ticketToLock = await Ticket.findById(data.ticket.id);
    if (!ticketToLock) {
      throw new Error("Ticket not found");
    }

    ticketToLock.set({ orderId: undefined });
    await ticketToLock.save();

    await new TicketUpdatedPublisher(this.client).publish({
      id: ticketToLock.id,
      title: ticketToLock.title,
      price: ticketToLock.price,
      userId: ticketToLock.userId,
      version: ticketToLock.version,
      orderId: undefined,
    });

    msg.ack();
  }
}
