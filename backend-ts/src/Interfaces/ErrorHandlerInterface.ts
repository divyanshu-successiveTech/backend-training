import { NextFunction ,Response,Request} from "express";
import {HttpError} from "http-errors"

export interface ErrorHandlerInterface{
    customError:(err:HttpError,req:Request,res:Response,next:NextFunction)=>void
}