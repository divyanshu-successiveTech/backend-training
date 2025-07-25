"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRouter = void 0;
const express_1 = require("express");
const checker_1 = require("../../middleware/checker");
const checkController_1 = require("../../controllers/checkController");
const checkRouter = (0, express_1.Router)();
exports.checkRouter = checkRouter;
checkRouter.post("/checking", checker_1.checkJoi.checkJoi(checker_1.checkSchema), checkController_1.checkController.check);
