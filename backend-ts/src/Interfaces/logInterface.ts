import { Request,Response } from "express";

export interface logInterface{
    log:(req:Request,res:Response)=>void;
}