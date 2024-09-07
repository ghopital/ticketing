import { Publisher, OrderCancelledEvent, Subjects } from "@ghopitaltickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
};