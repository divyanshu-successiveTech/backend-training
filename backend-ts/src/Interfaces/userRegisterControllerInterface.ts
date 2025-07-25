import { Request,Response,NextFunction } from "express";

export interface userRegisterControllerInterface{
    userDetails:(req:Request,res:Response,next:NextFunction)=>void
    getData:(req:Request,res:Response)=>void;
}