import { NextFunction,Request,Response } from "express";

export interface multi2MiddlewareInterface{
    multi2 :(req:Request,res:Response,next:NextFunction)=>void
}