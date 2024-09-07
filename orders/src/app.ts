import express from "express";
import { json } from "body-parser";
import { errorHandler, NotFoundError } from "@ghopitaltickets/common";
import "express-async-errors";
import { currentUser } from "@ghopitaltickets/common";
import cookieSession from "cookie-session";
import { indexOrdersRouter } from "./routes/index";
import { newOrdersRouter } from "./routes/new";
import { showOrdersRouter } from "./routes/show";
import { deleteOrdersRouter } from "./routes/delete";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    name: "session",
    signed: false, // Set this to true if you want the session data to be signed
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(indexOrdersRouter);
app.use(newOrdersRouter);
app.use(showOrdersRouter);
app.use(deleteOrdersRouter);

app.all("*", async (req, res, next) => {
  //next(new NotFoundError());
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
