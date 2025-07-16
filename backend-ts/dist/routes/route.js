"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allrouter = void 0;
const express_1 = require("express");
const user_route_1 = require("./dataSeeding/user.route");
const Allrouter = (0, express_1.Router)();
exports.Allrouter = Allrouter;
Allrouter.use(user_route_1.userRouter);
