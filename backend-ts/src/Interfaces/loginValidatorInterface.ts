import { Response,Request,NextFunction } from "express";

export interface loginValidatorInterface{
    loginValidator:(req:Request,res:Response,next:NextFunction)=>void;
}