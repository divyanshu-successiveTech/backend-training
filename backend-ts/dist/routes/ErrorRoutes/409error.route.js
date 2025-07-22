"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router409 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router409 = (0, express_1.Router)();
let existing = "ABC";
exports.Router409.post('/api/sameusers', (req, res, next) => {
    const username = req.body.username;
    if (existing == username) {
        return next((0, http_errors_1.default)(409, 'Username already exists'));
    }
    res.send("Hello to " + username);
});
