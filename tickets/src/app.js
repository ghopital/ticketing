"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const common_1 = require("@ghopitaltickets/common");
require("express-async-errors");
const common_2 = require("@ghopitaltickets/common");
const cookie_session_1 = __importDefault(require("cookie-session"));
const new_1 = require("./routes/new");
const show_1 = require("./routes/show");
const update_1 = require("./routes/update");
const app = (0, express_1.default)();
exports.app = app;
app.set("trust proxy", true);
app.use((0, body_parser_1.json)());
app.use((0, cookie_session_1.default)({
    name: "session",
    signed: false, // Set this to true if you want the session data to be signed
    secure: process.env.NODE_ENV !== "test",
}));
app.use(common_2.currentUser);
app.use(new_1.createTicketRouter);
app.use(show_1.showTicketRouter);
app.use(update_1.updateTicketRouter);
app.all("*", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next(new common_1.NotFoundError());
}));
app.use(common_1.errorHandler);
