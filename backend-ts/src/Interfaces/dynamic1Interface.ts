import { NextFunction,Request,Response } from "express";

export interface Dynamic1Interface{
    dynamicOne:(req:Request,res:Response,next:NextFunction)=>void;

}