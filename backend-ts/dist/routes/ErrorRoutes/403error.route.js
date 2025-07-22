"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router403 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router403 = (0, express_1.Router)();
const isAdmin = false;
exports.Router403.use("/api/admin", (req, res, next) => {
    if (!isAdmin) {
        return next((0, http_errors_1.default)(403, 'Forbidden'));
    }
    res.send("Pesrmission allowed");
});
