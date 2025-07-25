import { Request,Response } from "express";
export interface HealthInterface{
    health:(req:Request,res:Response)=>void;
}