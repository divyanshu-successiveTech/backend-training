"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router500 = void 0;
const express_1 = require("express");
exports.Router500 = (0, express_1.Router)();
exports.Router500.get('/api/crash', (req, res, next) => {
    throw new Error('Unexpected server error');
});
