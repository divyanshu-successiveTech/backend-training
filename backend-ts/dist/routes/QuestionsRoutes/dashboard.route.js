"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashBoardRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../../middleware/authenticate");
const authenticateController_1 = require("../../controllers/authenticateController");
const dashBoardRouter = (0, express_1.Router)();
exports.dashBoardRouter = dashBoardRouter;
dashBoardRouter.get("/dashboard", authenticate_1.authenticate.authenticate, authenticateController_1.authenticateController.authenticateController);
