"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router401 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.router401 = (0, express_1.Router)();
exports.router401.use("/api/private", (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token || token !== "Authorized") {
        return next((0, http_errors_1.default)(401, 'Unauthorized'));
    }
    res.send("Authorized to take further actions");
});
