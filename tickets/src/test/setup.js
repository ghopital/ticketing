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
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let mongoServer;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    process.env.JWT_KEY = "masterToken";
    mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = yield mongoServer.getUri();
    yield mongoose_1.default.connect(uri, {});
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    const collections = yield mongoose_1.default.connection.db.collections();
    for (const collection of collections) {
        yield collection.deleteMany({});
    }
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
    if (mongoServer) {
        yield mongoServer.stop();
    }
}));
global.signin = () => {
    //Build JWT payload. {id, email}
    const payload = {
        id: new mongoose_1.default.Types.ObjectId().toHexString(),
        email: "test@example.com",
    };
    //Create JWT
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY);
    //Build session Object. {jwt: MY_JWT}
    const session = { jwt: token };
    //Turn that session into JSON
    const sessionJSON = JSON.stringify(session);
    //Take JSON and encoded into base64 string
    const base64 = Buffer.from(sessionJSON).toString("base64");
    //return a string thats the cookie with the encoded data
    return [`session=${base64}`];
};
