"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router405 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router405 = (0, express_1.Router)();
exports.Router405.all('/api/readonly', (req, res, next) => {
    if (req.method !== 'GET') {
        return next((0, http_errors_1.default)(405, 'Method Not Allowed'));
    }
    res.send('Read-only content');
});
