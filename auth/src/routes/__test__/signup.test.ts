import request from "supertest";
import { app } from "../../app";

it("returns a 201 on a successful response", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password123",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test",
      password: "password123",
    })
    .expect(400);
});

it("returns a 400 with a password less than 4 characters", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "pas",
    })
    .expect(400);
});

it("returns a 400 with missing email and password", async () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it('disallows duplicate emails', async () => {
    await request(app)
     .post('/api/users/signup')
     .send({
        email: 'test@example.com',
        password: 'password123',
      })
     .expect(201);

     await request(app)
     .post('/api/users/signup')
     .send({
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(400);
});

it('sets a cookie after a successful login', async () => {
    const response = await request(app)
     .post('/api/users/signup')
     .send({
        email: 'test@example.com',
        password: 'password123',
      })
     .expect(201);

      expect(response.get('Set-Cookie')).not.toBeUndefined(); // the cookie settings secure property needs to be updated to not be secure when we are running tests
});