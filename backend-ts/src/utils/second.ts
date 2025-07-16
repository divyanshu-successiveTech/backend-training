import { Request,Response, NextFunction } from "express-serve-static-core";

const second=(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log("At first middleware");
        throw new Error("Something went wrong");
    }catch (err) {
        next(err); 
    }

}

export{second}