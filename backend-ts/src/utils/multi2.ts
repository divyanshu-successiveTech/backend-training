import { Request,Response,NextFunction } from "express"

const multi2 =(req:Request,res:Response,next:NextFunction)=>{
    console.log("At second middleware");
    next();

}

export {multi2}