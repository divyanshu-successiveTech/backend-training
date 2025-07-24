import { Router } from "express";
import { loginSchema, registerValidator } from "../../middleware/registerValidator";
import { userRegisterController } from "../../controllers/userRegisterController";

export const authenticateRegisterRouter = Router();

authenticateRegisterRouter.post("/register",registerValidator.validate(loginSchema),userRegisterController.userDetails);


