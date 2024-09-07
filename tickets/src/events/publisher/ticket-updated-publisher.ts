import { Publisher, Subjects, TicketUpdatedEvent } from "@ghopitaltickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;    
}