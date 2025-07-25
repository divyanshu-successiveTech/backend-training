import { Request,Response } from "express";

export interface AuthenticateInterface{
    authenticateController:(req:Request,res:Response)=>void;
}