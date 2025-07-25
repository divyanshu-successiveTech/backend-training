import { NextFunction, Request,Response } from "express"
import { Multi1MiddlewareInterface } from "../Interfaces/multi1MiddlewareInterface";

class Multi1 implements Multi1MiddlewareInterface{

    multi1(req:Request,res:Response,next:NextFunction){
        console.log("At first middleware");
        next();
        
    }

}

export const multi1 = new Multi1



