import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

console.clear();

const client = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

client.on("connect", async () => {
  console.log("Connected to NATS");
  const ticketCreatedPublisher = new TicketCreatedPublisher(client);

  const data = {
    id: "123",
    title: "Test Event",
    price: 19.99,
    userId: "gabriel",
  };
  try {
    await ticketCreatedPublisher.publish(data);
  } catch (err) {
    console.log("Error publishing event", err);
  }
});
