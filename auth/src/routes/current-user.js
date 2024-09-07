"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserRouter = void 0;
const express_1 = __importDefault(require("express"));
const common_1 = require("@ghopitaltickets/common");
const router = express_1.default.Router();
exports.CurrentUserRouter = router;
router.get("/api/users/currentuser", common_1.currentUser, common_1.requireAuth, (req, res, next) => {
    res.send({ currentUser: req.currentUser || null });
});
