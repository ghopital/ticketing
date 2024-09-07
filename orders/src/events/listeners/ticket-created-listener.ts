import { Message } from "node-nats-streaming";
import {
  Subjects,
  Listener,
  TicketCreatedEvent,
} from "@ghopitaltickets/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly queueGroupName = queueGroupName;
  readonly subject = Subjects.TicketCreated;
  protected ackWait: number = 5000;
  async onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const {id, title, price} = data;

    const ticket = Ticket.build({
        id:id,
        title: title,
        price: price
    });
    await ticket.save();

    console.log(`Ticket created: ${ticket.id}`);
    msg.ack();
  }  
}
