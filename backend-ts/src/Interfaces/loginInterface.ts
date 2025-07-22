import { Request,Response } from "express";

export interface loginInterface{
    loginController:(req:Request,res:Response)=>void;
}