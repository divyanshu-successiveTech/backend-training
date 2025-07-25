"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicRouter1 = void 0;
const express_1 = require("express");
const validationRules_1 = require("../../middleware/validationRules");
const dynamic1Controller_1 = require("../../controllers/dynamic1Controller");
exports.dynamicRouter1 = (0, express_1.Router)();
exports.dynamicRouter1.post("/student", validationRules_1.checkDynamicRoute.checkDynamicRoute, dynamic1Controller_1.dynamic1.dynamicOne);
