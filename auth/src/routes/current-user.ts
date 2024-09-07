import express from "express";
import { currentUser, requireAuth } from "@ghopitaltickets/common";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  requireAuth,
  (req, res, next) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as CurrentUserRouter };
