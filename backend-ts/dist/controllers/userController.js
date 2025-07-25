"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const mockData_1 = __importDefault(require("../mockData"));
const userService_1 = require("../service/userService");
const User = require("../Models/UserSchema");
class UserController {
    getUserData(req, res, next) {
        try {
            res.send(mockData_1.default);
        }
        catch (error) {
            next(error);
        }
    }
    async findUser(req, res, next) {
        const users = await userService_1.userservice.findUser();
        console.log(users);
        res.send({
            code: 200,
            status: "OK",
            data: { users }
        });
    }
}
exports.userController = new UserController();
