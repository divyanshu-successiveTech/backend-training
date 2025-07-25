"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncErrorRouter = void 0;
const express_1 = require("express");
exports.asyncErrorRouter = (0, express_1.Router)();
exports.asyncErrorRouter.get('/error', async (req, res, next) => {
    try {
        throw new Error('Something went wrong');
    }
    catch (err) {
        next(err);
    }
});
