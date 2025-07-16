import { NextFunction, Router } from "express";
import { auth } from "../../utils/auth";
import { userController } from "../../controllers/userController";
import { postData } from "../../utils/postData";


const userRouter = Router();

userRouter.get("/user",auth,userController)

userRouter.post("/user",postData)
export {userRouter};