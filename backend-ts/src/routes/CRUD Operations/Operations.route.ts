import { NextFunction, Router,Request,Response } from "express";
import { userController } from "../../controllers/userController";

const User = require("../../Models/UserSchema")


const mongoRouter = Router();

mongoRouter.get("/data",userController.findUser)

mongoRouter.post("/data",async(req:Request,res:Response,next:NextFunction)=>{

    const user = new User(req.body);
    const result = await user.save();
    console.log("Result:", result);
    res.send(result);    
        

})
mongoRouter.put("/data",(req:Request,res:Response,next:NextFunction)=>{
        

})

mongoRouter.delete("/data",(req:Request,res:Response,next:NextFunction)=>{
        

})

export {mongoRouter}

