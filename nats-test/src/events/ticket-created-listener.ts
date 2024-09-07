import { Message } from "node-nats-streaming";
import { Listener, Subjects, TicketCreatedEvent } from "@ghopitaltickets/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    // Process ticket creation event
    console.log(`Processing ticket creation event: ${JSON.stringify(data)}`);
    //...
    console.log("ticket id: ", data.id);
    console.log("ticket title: ", data.title);
    console.log("ticket price: ", data.price);
    console.log("ticket price: ", data.userId);
    msg.ack();
  }
}
