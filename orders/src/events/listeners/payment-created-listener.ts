import {
  Listener,
  NotFoundError,
  OrderStatus,
  PaymentCreatedEvent,
  Subjects,
} from "@ghopitaltickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: PaymentCreatedEvent["data"], msg: Message) {
    console.log(`Payment received for order ${data}`);
    const order = await Order.findById(data.orderId);
    if(!order){
        throw new NotFoundError();
    }
    
    order.set({ status: OrderStatus.Complete });
    await order.save();
    msg.ack();
  }
}
