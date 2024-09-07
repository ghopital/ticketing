import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Ticket } from "../../models/ticket";
import { OrderStatus } from "@ghopitaltickets/common";
import { natsWrapper } from "../../nats-wrapper";

it(" returns an error if the ticket does not exist", async () => {
  const ticketId = new mongoose.Types.ObjectId().toString("hex");
  const response = await request(app)
    .post(`/api/orders`)
    .set("Cookie", global.signin())
    .send({ ticketId });

  //console.log(response);
  expect(response.status).toEqual(404);
});

it(" returns an error if the ticket is already reserved", async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "Test ticket",
    price: 10
  });
  await ticket.save();
  const order = Order.build({
    ticket,
    userId: "some-user",
    status: OrderStatus.Created,
    expiresAt: new Date(),
  });
  await order.save();

  await request(app)
    .post(`/api/orders`)
    .set("Cookie", global.signin())
    .send({ ticketId: ticket.id })
    .expect(400);
});

it(" returns ticket", async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "Test ticket",
    price: 10
  });
  await ticket.save();

  //console.log(ticket);
  //console.log('ticket Id: ',ticket.id.toString());

  const response = await request(app)
    .post(`/api/orders`)
    .set("Cookie", global.signin())
    .send({ ticketId: ticket.id.toString() });

  //console.log(response);
  expect(response.status).toEqual(201);
});

it("emits an order created event", async () => {
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: "Test ticket",
        price: 10
      });
      await ticket.save();
    
      //console.log(ticket);
      //console.log('ticket Id: ',ticket.id.toString());
    
      const response = await request(app)
        .post(`/api/orders`)
        .set("Cookie", global.signin())
        .send({ ticketId: ticket.id.toString() });
    
      //console.log(response);
      expect(response.status).toEqual(201);

      expect(natsWrapper.client.publish).toHaveBeenCalled();
});
