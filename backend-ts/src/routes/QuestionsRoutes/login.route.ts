import { Router } from "express";
import { loginController } from "../../controllers/loginController";

const loginRouter = Router();

loginRouter.get("/login",loginController.loginController)

export {loginRouter}
