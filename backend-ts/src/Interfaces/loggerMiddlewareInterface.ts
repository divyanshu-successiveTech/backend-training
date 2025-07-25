import { Request,Response,NextFunction } from "express";

export interface LoggerMiddlewareaInterface{
    logger:(req:Request,res:Response,next:NextFunction)=>void;
}