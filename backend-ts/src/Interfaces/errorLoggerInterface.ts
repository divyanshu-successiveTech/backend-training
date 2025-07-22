import { Request,Response,NextFunction } from "express";

export interface ErrorLoggerInterface{
    errorLogController:(req:Request,res:Response,next:NextFunction)=>void;

}