import { NextFunction ,Request,Response} from "express";

export interface locationInterface{
    locationUpdate:(req:Request,res:Response,next:NextFunction)=>void;
}