"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = require("express");
const healthController_1 = require("../../controllers/healthController");
const healthRouter = (0, express_1.Router)();
exports.healthRouter = healthRouter;
healthRouter.use("/health", healthController_1.healthController.health);
