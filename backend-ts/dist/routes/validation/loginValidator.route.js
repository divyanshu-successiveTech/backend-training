"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidaterouter = void 0;
const express_1 = require("express");
const validator_1 = require("../../middleware/validator");
const loginValidatorController_1 = require("../../controllers/loginValidatorController");
const loginValidaterouter = (0, express_1.Router)();
exports.loginValidaterouter = loginValidaterouter;
loginValidaterouter.post("/loginValidate", validator_1.validateJOI.validateJoi(validator_1.userSchema), loginValidatorController_1.loginValidatorController.loginValidator);
