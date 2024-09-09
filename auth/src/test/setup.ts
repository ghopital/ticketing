import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";

declare global {
  var signin: () => Promise<string[]>;
}

let mongoServer: any;
beforeAll(async () => {
  process.env.JWT_KEY = "masterToken";
  mongoServer = await MongoMemoryServer.create();
  const uri = await mongoServer.getUri();

  await mongoose.connect(uri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

global.signin = async () => {
  const email = "test@example.com";
  const password = "test";
  const response = await request(app).post("/api/users/signup").send({
    email,
    password,
  });
  expect(201);

  const cookie = response.get("Set-Cookie") || [];
  return cookie;
};
