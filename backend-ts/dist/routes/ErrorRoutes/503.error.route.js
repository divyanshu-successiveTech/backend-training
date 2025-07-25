"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router503 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router503 = (0, express_1.Router)();
exports.Router503.get('/api/unavailable', (req, res, next) => {
    const unavailable = true;
    if (unavailable) {
        return next((0, http_errors_1.default)(503, 'Service is unavailable'));
    }
});
