"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const values_1 = require("../routes/dataSeeding/values");
const secret = process.env.JWT_SECRET || "";
class LoginController {
    loginController(req, res) {
        const token = jsonwebtoken_1.default.sign(values_1.user, secret, { expiresIn: '1h' });
        res.json({ token });
    }
}
exports.loginController = new LoginController;
