"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthenticateMiddleware {
    constructor() {
        this.authenticate = (req, res, next) => {
            const secret = process.env.JWT_SECRET || "";
            const authHead = req.headers['authorization'];
            const token = authHead && authHead.split(' ')[1];
            if (!token) {
                return res.sendStatus(400);
            }
            jsonwebtoken_1.default.verify(token, secret, (err) => {
                if (err)
                    return res.sendStatus(403);
                next();
            });
        };
    }
}
exports.authenticate = new AuthenticateMiddleware;
