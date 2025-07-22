"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerRouter = void 0;
const express_1 = require("express");
const logger_1 = require("../../middleware/logger");
const logController_1 = require("../../controllers/logController");
const loggerRouter = (0, express_1.Router)();
exports.loggerRouter = loggerRouter;
loggerRouter.get("/log", logger_1.logger.logger, logController_1.logController.log);
