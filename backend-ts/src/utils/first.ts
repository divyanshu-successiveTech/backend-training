import { Request,Response,NextFunction } from "express-serve-static-core";

const first=(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log("At first middleware");

        throw new Error("Something went wrong in first middleware");
    }catch (err) {
        next(err); 
    }

}

export{first}