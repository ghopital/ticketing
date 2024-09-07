import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "rightpassword",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);
  //console.log(response.get("Set-Cookie"));
  //[ 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly' ]

  expect(response.get("Set-Cookie")).toBeDefined();
  expect((response.get("Set-Cookie") || [])[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
  /*expect(response.get("Set-Cookie")[0]).not.toContain("path=/api/users/signout");
    expect(response.get("Set-Cookie")[0]).not.toContain("HttpOnly");
    expect(response.get("Set-Cookie")[0]).not.toContain("secure");
  */
});
