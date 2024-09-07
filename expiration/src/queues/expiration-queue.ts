import Queue from "bull";
import { ExpirationCompletedPublisher } from "../events/publishers/expiration-completed-publisher";
import { natsWrapper } from "../nats-wrapper";

interface Payload {
  orderId: string;
}

const expirationQueue = new Queue<Payload>("order:expiration", {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expirationQueue.process(async (job) => {
    const { orderId } = job.data;
    console.log(`Processing order: ${orderId}`);
    new ExpirationCompletedPublisher(natsWrapper.client).publish({orderId});
});

export { expirationQueue };
