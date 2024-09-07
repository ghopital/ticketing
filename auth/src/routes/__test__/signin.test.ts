import request from "supertest";
import { app } from "../../app";

it("fails when an email that does not exist is supplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "nonexistent@example.com",
      password: "password123",
    })
    .expect(400); // This will fail because the email does not exist in the database
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "rightpassword",
    })
    .expect(201); 

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@example.com",
      password: "wrongpassword",
    })
    .expect(400); // This will fail because the password is incorrect
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "rightpassword",
    })
    .expect(201); 

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@example.com",
      password: "rightpassword",
    })
    .expect(200); 

    expect(response.get("Set-Cookie")).toBeDefined(); // This will fail if the cookie is not set
});