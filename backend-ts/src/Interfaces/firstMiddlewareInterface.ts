import { NextFunction,Request,Response } from "express-serve-static-core";

export interface firstMiddlewareInterface{
    firstmiddleware:(req:Request,res:Response,next:NextFunction)=>void;
}