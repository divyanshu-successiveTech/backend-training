import { Request,Response, NextFunction } from "express-serve-static-core";
import { SecondMiddlewareInterface } from "../Interfaces/secondMiddlewareInterface";


class Second implements SecondMiddlewareInterface{

    secondmiddleware(req:Request,res:Response,next:NextFunction){
        try {
            console.log("At first middleware");
            throw new Error("Something went wrong");
        }catch (err) {
            next(err); 
        }
    
    }

}

export const second = new Second;