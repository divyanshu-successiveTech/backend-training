"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router502 = void 0;
const express_1 = require("express");
const http_errors_1 = __importDefault(require("http-errors"));
exports.Router502 = (0, express_1.Router)();
exports.Router502.get('/api/gateway', (req, res, next) => {
    const wrongGateway = true;
    if (wrongGateway) {
        return next((0, http_errors_1.default)(502, 'Going to wrong gateway'));
    }
});
