import { NextFunction,Request,Response } from "express";

export interface locationCheckMiddlewareInterface{
    locationCheck:(req:Request,res:Response,next:NextFunction)=>void;
}