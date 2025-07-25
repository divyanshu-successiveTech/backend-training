import { NextFunction,Request,Response } from "express";

export interface Multi1MiddlewareInterface{
    multi1:(req:Request,res:Response,next:NextFunction)=>void;
}