"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryRouter = void 0;
const express_1 = require("express");
const queryCheck_1 = require("../../middleware/queryCheck");
const queryValidatorController_1 = require("../../controllers/queryValidatorController");
const queryRouter = (0, express_1.Router)();
exports.queryRouter = queryRouter;
queryRouter.post("/query", queryCheck_1.queryCheck.queryCheck(queryCheck_1.querySchema), queryValidatorController_1.queryValidatorController.queryValidate);
