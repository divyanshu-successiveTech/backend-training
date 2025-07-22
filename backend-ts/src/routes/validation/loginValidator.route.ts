import { Router } from "express";
import { userSchema, validateJOI } from "../../middleware/validator";
import { loginValidatorController } from "../../controllers/loginValidatorController";

const loginValidaterouter=Router();

loginValidaterouter.post("/loginValidate", validateJOI.validateJoi(userSchema),loginValidatorController.loginValidator)

export {loginValidaterouter}