import { Request,Response,NextFunction } from "express-serve-static-core";
import { firstMiddlewareInterface } from "../Interfaces/firstMiddlewareInterface";

class First implements firstMiddlewareInterface{

    firstmiddleware(req:Request,res:Response,next:NextFunction){
        try {
            console.log("At first middleware");
    
            throw new Error("Something went wrong in first middleware");
        }catch (err) {
            next(err); 
        }
    
    }

}


export const first = new First