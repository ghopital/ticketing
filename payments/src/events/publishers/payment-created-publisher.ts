import { Subjects, Publisher, PaymentCreatedEvent } from '@ghopitaltickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
