"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router501 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router501 = (0, express_1.Router)();
exports.Router501.get('/api/progress', (req, res, next) => {
    return next((0, http_errors_1.default)(501, 'This feature is not implemented yet'));
});
