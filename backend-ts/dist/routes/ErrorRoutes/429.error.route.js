"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router429 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router429 = (0, express_1.Router)();
const tooManyRequests = true;
exports.Router429.get('/api/ratelimit', (req, res, next) => {
    if (tooManyRequests) {
        return next((0, http_errors_1.default)(429, 'Too Many Requests'));
    }
    res.send("Processing the requests");
});
