import { Request,Response,NextFunction } from "express"


export interface sampleValidatorInterface{

    sampleValidate:(req:Request,res:Response,next:NextFunction)=>void



}