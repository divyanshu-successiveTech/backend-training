import { Request,Response,NextFunction } from "express"
import { multi2MiddlewareInterface } from "../Interfaces/multi2MiddlewareInterface";

class Multi2 implements multi2MiddlewareInterface{

    multi2(req:Request,res:Response,next:NextFunction){
        console.log("At second middleware");
        next();

    }


}


export const multi2 = new Multi2;