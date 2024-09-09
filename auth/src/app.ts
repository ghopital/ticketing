import express from "express";
import { json } from "body-parser";
import { CurrentUserRouter } from "./routes/current-user";
import { SignUpRouter } from "./routes/signup";
import { SignOutRouter } from "./routes/signout";
import { SignInRouter } from "./routes/signin";
import { errorHandler, NotFoundError } from "@ghopitaltickets/common";
import "express-async-errors";

import cookieSession from "cookie-session";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    name: "session",
    signed: false, // Set this to true if you want the session data to be signed
    //secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);

app.use(CurrentUserRouter);
app.use(SignInRouter);
app.use(SignOutRouter);
app.use(SignUpRouter);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export { app };
