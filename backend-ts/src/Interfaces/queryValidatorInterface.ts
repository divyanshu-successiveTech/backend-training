import { Request,Response } from "express"

export interface QueryValidatorInterface{
    queryValidate:(req:Request,res:Response)=>void
}