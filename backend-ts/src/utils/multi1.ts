import { NextFunction, Request,Response } from "express"

const multi1=(req:Request,res:Response,next:NextFunction)=>{
    console.log("At first middleware");
    next();
    
}

export {multi1};