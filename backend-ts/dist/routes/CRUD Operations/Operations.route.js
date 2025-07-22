"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const User = require("../../Models/UserSchema");
const mongoRouter = (0, express_1.Router)();
exports.mongoRouter = mongoRouter;
mongoRouter.get("/data", userController_1.userController.findUser);
mongoRouter.post("/data", async (req, res, next) => {
    const user = new User(req.body);
    const result = await user.save();
    console.log("Result:", result);
    res.send(result);
});
mongoRouter.put("/data", (req, res, next) => {
});
mongoRouter.delete("/data", (req, res, next) => {
});
