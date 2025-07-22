import { NextFunction ,Request,Response} from "express";

export interface AuthenticateMiddlewareInterface {
    authenticate:(req:Request,res:Response,next:NextFunction)=>void;

}