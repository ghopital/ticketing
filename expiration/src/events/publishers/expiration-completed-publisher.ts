import { Subjects, Publisher, ExpirationCompletedEvent } from "@ghopitaltickets/common";

export class ExpirationCompletedPublisher extends Publisher<ExpirationCompletedEvent> {
    readonly subject = Subjects.ExpirationCompleted;
}