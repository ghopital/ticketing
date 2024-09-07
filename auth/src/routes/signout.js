"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignOutRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.SignOutRouter = router;
router.post('/api/users/signout', (req, res, next) => {
    req.session = null;
    res.send({});
});
