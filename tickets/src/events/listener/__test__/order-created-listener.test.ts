import {
  Listener,
  OrderCreatedEvent,
  OrderStatus,
} from "@ghopitaltickets/common";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCreatedListener } from "../order-created-listener";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../../models/ticket";

const setup = async () => {
  const listener = new OrderCreatedListener(natsWrapper.client);

  const ticket = Ticket.build({
    title: "Test Ticket",
    price: 10,
    userId: "valid-user",
  });

  await ticket.save();

  const data: OrderCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    userId: "valid-user",
    status: OrderStatus.Created,
    expiresAt: "some expiration date",
    version: 0,
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, ticket };
};

it("sets the order id of the ticket", async () => {
  const { listener, data, msg, ticket } = await setup();
  await listener.onMessage(data, msg);
  // Assert that the order was created with the expected status and ticket details.
  const ticketUpdated = await Ticket.findById(ticket.id);
  expect(ticketUpdated!.orderId).toEqual(data.id);
});

it("acks the message", async () => {
  const { listener, data, msg, ticket } = await setup();
  await listener.onMessage(data, msg);
  // Assert that the order was created with the expected status and ticket details.

  expect(msg.ack).toHaveBeenCalled();
});

it("publishes a ticket updated event", async () => {
  const { listener, data, msg, ticket } = await setup();
  await listener.onMessage(data, msg);
  // Assert that the order was created with the expected status and ticket details.
  // @ts-ignore
  expect(natsWrapper.client.publish).toHaveBeenCalled();

  //console.log((natsWrapper.client.publish as jest.Mock).mock.calls);

  const ticketUpdatedData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1]);
  //console.log(data);
  expect(data.id).toEqual(ticketUpdatedData.orderId);

});
