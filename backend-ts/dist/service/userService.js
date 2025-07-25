"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userservice = void 0;
const User = require("../Models/UserSchema");
class userService {
    async findUser() {
        const users = await User.find({});
        return users;
    }
}
exports.userservice = new userService();
