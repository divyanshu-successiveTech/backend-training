import { NextFunction,Request,Response } from "express-serve-static-core";

export interface SecondMiddlewareInterface{

    secondmiddleware:(req:Request,res:Response,next:NextFunction)=>void

}