"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorRouter = void 0;
const express_1 = require("express");
const sampleValidatorController_1 = require("../../controllers/sampleValidatorController");
exports.validatorRouter = (0, express_1.Router)();
exports.validatorRouter.post("/request", sampleValidatorController_1.sampleValodatorController.sampleValidate);
