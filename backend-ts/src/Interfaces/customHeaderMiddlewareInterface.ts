import { NextFunction ,Response,Request} from "express";

export interface CustomHeaderMiddlewareInterface{
    customHeader:(req:Request,res:Response,next:NextFunction)=>void;

}