import { NextFunction,Request,Response } from "express";

export interface checkDynamicInterface{
    checkDynamicRoute:(req:Request,res:Response,next:NextFunction)=>void
}