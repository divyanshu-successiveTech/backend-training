import { NextFunction ,Request,Response} from "express";

export interface ErrorLoggerMiddlewareInterface{
    errorLogger :(err:Error,req:Request,res:Response,next:NextFunction)=>void;
}