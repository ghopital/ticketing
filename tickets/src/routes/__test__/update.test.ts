import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { natsWrapper } from "../../nats-wrapper";
import { Ticket } from "../../models/ticket";

it("returns a 200 on a successful response", async () => {
  const title = "Valid Title";
  const price = 10;
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title,
      price,
    });

  const updateResponse = await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "Test ticket updated", price: 20 });

  //console.log(updateResponse);
  expect(updateResponse.status).toEqual(200);
});

it("returns a 404 if the provided id does not exists", async () => {
  const ticketId = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${ticketId}`)
    .set("Cookie", global.signin())
    .send({ title: "Test ticket", price: 10 })
    .expect(404);
});

it("returns a 401 if the user is not authenticated", async () => {
  const ticketId = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${ticketId}`)
    .send({ title: "Test ticket", price: 10 })
    .expect(401);
});

it("returns a 401 if the user does not own the ticket", async () => {
  const title = "Valid Title";
  const price = 10;
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({ title: "Test ticket updated", price: 20 })
    .expect(401);
});

it("returns a 400 if the user provides an invalid title or price", async () => {
  const title = "Valid Title";
  const price = 10;
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title,
      price,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "", price: 20 })
    .expect(400);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "valid title updated", price: -15 })
    .expect(400);
});

it("published an event", async () => {
  const title = "Valid Title";
  const price = 10;
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title,
      price,
    });

  const updateResponse = await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "Test ticket updated", price: 20 });

  //console.log(updateResponse);
  expect(updateResponse.status).toEqual(200);

  //console.log(natsWrapper);
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it("reject updates if the ticket is reserved", async () => {
  const title = "Valid Title";
  const price = 10;
  const cookie = global.signin();
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title,
      price,
    });

  const ticket = await Ticket.findById(response.body.id);
  ticket!.set({ orderId: new mongoose.Types.ObjectId().toHexString() });
  await ticket!.save();

  const updateResponse = await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({ title: "Test ticket updated", price: 20 });

  //console.log(updateResponse);
  expect(updateResponse.status).toEqual(400);
});
