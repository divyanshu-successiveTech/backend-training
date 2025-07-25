import { NextFunction, Router } from "express";
import { auth } from "../../middleware/auth";
import { userController } from "../../controllers/userController";
import { postData } from "../../middleware/postData";


const userRouter = Router();

userRouter.get("/user",auth.getAuth,userController.getUserData)

userRouter.post("/user",postData.postData)
export {userRouter};