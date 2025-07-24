import { NextFunction, Router,Request,Response } from "express";
import { checkDynamicRoute } from "../../utils/validationRules";

export const dynamicRouter1 = Router();

dynamicRouter1.post("/student",checkDynamicRoute,(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send("Successfull log in to student")


})

