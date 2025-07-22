"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router400 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
const Router400 = (0, express_1.Router)();
exports.Router400 = Router400;
Router400.post('/api/users', (req, res, next) => {
    const { username } = req.body || {};
    console.log(username);
    if (!username) {
        return next((0, http_errors_1.default)(400, 'Username is required'));
    }
    res.send("The name of user is " + username);
});
