"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRouter = void 0;
const express_1 = require("express");
const rateLimiter_1 = require("../../middleware/rateLimiter");
const rateController_1 = require("../../controllers/rateController");
const rateRouter = (0, express_1.Router)();
exports.rateRouter = rateRouter;
rateRouter.get('/limit', rateLimiter_1.rateLimiter.rateLimiter, rateController_1.rateController.rateController);
