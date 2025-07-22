import { Request,Response } from "express";

export interface CustomHeaderInterafce{
    customHeader:(req:Request,res:Response)=>void;

}