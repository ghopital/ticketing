import request from "supertest";
import { app } from "../../app";

const createTicket = () => {
  const title = "Valid Title";
  const price = 10;
  return request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title,
    price,
  });
};

it("can fetch a list of tickets", async () => {
  await createTicket();
  await createTicket();
  await createTicket();
  const response = await request(app).get("/api/tickets").send();
  //console.log(response);

  expect(response.status).toEqual(200);
  expect(response.body.length).toBe(3);
});
