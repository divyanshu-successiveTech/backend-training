import { NextFunction,Response,Request } from "express";

export interface Dynamic2Interface{
    dynamic2Controller:(req:Request,res:Response,next:NextFunction)=>void;
}