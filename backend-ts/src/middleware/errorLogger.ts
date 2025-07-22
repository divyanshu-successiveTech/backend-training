import { NextFunction ,Request,Response} from "express";
import { ErrorLoggerMiddlewareInterface } from "../Interfaces/errorLoggerMiddlewareInterface";

class ErrorLogger implements ErrorLoggerMiddlewareInterface{

    
    errorLogger =(err:Error,req:Request,res:Response,next:NextFunction)=>{
    
        console.log(`Error: ${err} at ${req.baseUrl} `);
    
        return res.status(400).send(err.message);
    
    }

}

export const errorLogger = new ErrorLogger