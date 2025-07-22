"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router422 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router422 = (0, express_1.Router)();
exports.Router422.post('/api/registering', (req, res, next) => {
    const { email } = req.body || {};
    if (!email || !email.includes('@')) {
        return next((0, http_errors_1.default)(422, 'Invalid email address'));
    }
    res.send("the email is " + email);
});
