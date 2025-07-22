"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicRouter2 = void 0;
const express_1 = require("express");
const validationRules_1 = require("../../middleware/validationRules");
const dynamic2Controller_1 = require("../../controllers/dynamic2Controller");
exports.dynamicRouter2 = (0, express_1.Router)();
exports.dynamicRouter2.post("/teacher", validationRules_1.checkDynamicRoute.checkDynamicRoute, dynamic2Controller_1.dynamic2.dynamic2Controller);
