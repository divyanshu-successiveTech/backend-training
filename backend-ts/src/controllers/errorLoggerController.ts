import { Request,Response,NextFunction } from "express";
import { ErrorLoggerInterface } from "../Interfaces/errorLoggerInterface";


class ErrorLogController implements ErrorLoggerInterface{


    errorLogController(req:Request,res:Response,next:NextFunction){

        try {
            throw new Error("Something went wrong");
        } catch (err) {
            next(err); 
        }

    }
}

export const errorLogController = new ErrorLogController