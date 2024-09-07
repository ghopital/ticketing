import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-created-listener";
import { TicketUpdatedListener } from "./events/ticket-updated-listener";
console.clear();

const client = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

client.on("connect", () => {
  console.log("Connected to NATS");

  client.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });

  const ticketCreatedListener = new TicketCreatedListener(client);
  ticketCreatedListener.listen();

  const ticketUpdatedListener = new TicketUpdatedListener(client);
  ticketUpdatedListener.listen();
});

process.on("SIGINT", () => client.close());
process.on("SIGTERM", () => client.close());
