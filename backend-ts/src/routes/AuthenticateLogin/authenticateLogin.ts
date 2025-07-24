import { Router } from "express";
import { userRegisterController } from "../../controllers/userRegisterController";

export const authenticateLoginRouterLoginRouter = Router();

authenticateLoginRouterLoginRouter.post("/userlogin",userRegisterController.getData)

