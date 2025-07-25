"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router504 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router504 = (0, express_1.Router)();
const timeout = true;
exports.Router504.get('/api/timeout', (req, res, next) => {
    if (timeout) {
        return next((0, http_errors_1.default)(504, 'Gateway Timeout'));
    }
});
