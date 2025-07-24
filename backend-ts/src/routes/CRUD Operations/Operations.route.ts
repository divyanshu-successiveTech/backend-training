import { NextFunction, Router,Request,Response } from "express";
import { userController } from "../../controllers/userController";
import { mongoValidator, validateMongo } from "../../middleware/validationMongo";

const User = require("../../Models/UserSchema")


const mongoRouter = Router();

mongoRouter.get("/data",userController.findUser)

mongoRouter.post("/data",validateMongo.validate(mongoValidator),userController.saveUser)
mongoRouter.put("/data",(req:Request,res:Response,next:NextFunction)=>{
        

})

mongoRouter.delete("/data",(req:Request,res:Response,next:NextFunction)=>{
        

})

export {mongoRouter}

