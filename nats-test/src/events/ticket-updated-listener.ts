import { Message } from "node-nats-streaming";
import { Listener, Subjects, TicketUpdatedEvent } from "@ghopitaltickets/common";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  queueGroupName = "payments-service";
  onMessage(data: TicketUpdatedEvent["data"], msg: Message): void {
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
