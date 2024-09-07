import { Listener, OrderCreatedEvent, Subjects } from "@ghopitaltickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publisher/ticket-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    
    const ticketToLock = await Ticket.findById(data.ticket.id);
    if (!ticketToLock) {
      throw new Error("Ticket not found");
    }

    ticketToLock.set({ orderId: data.id });
    await ticketToLock.save();

    await new TicketUpdatedPublisher(this.client).publish({
      id: ticketToLock.id,
      title: ticketToLock.title,
      price: ticketToLock.price,
      userId: ticketToLock.userId,
      version: ticketToLock.version,
      orderId: ticketToLock.orderId,
    });

    msg.ack();
  }
}
