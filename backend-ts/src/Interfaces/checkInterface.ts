import { Request,Response } from "express";

export interface CheckInterface{
    check:(req:Request,res:Response)=>void;
}