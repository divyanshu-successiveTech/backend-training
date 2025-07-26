import { NextFunction,Request,Response } from "express";
import { HttpError } from "http-errors";
import { ErrorHandlerInterface } from "../Interfaces/ErrorHandlerInterface";

enum Errors{
    "Error_400"=400,
    "Error_401"=401,
    "Error_403"=403,
    "Error_405"=405,
    "Error_409"=409,
    "Error_422"=422,
    "Error_429"=429,
    "Error_500"=500,
    "Error_501"=501,
    "Error_502"=502,
    "Error_503"=503,
    "Error_504"=504,
}

class ErrorHandler implements ErrorHandlerInterface{
    customError(err:HttpError,req:Request,res:Response,next:NextFunction){
        const statusCode = err.statusCode || Errors.Error_500;
        const message = err.message || "Something went wrong";

        switch (statusCode) {
        case Errors.Error_400:
            res.status(400).json({
                success: false,
                error: "Bad Request",
                message,
            });
            break;

        case Errors.Error_401:
            res.status(401).json({
                success: false,
                error: "Unauthorized",
                message,
            });
            break;

        case Errors.Error_403:
            res.status(403).json({
                success: false,
                error: "Forbidden",
                message,
            });
            break;

        case Errors.Error_405:
            res.status(405).json({
                success:false,
                error:"Method not allowed"
            })
            break;

        case Errors.Error_409:
            res.status(409).json({
                success: false,
                error: "Conflict",
                message,
            });
            break;

        case Errors.Error_422:
            res.status(422).json({
                success: false,
                error: "Validation Error",
                message,
            });
            break;

        case Errors.Error_429:
            res.status(429).json({
                success: false,
                error: "Too many requests",
                message,
            });
            break;

        case Errors.Error_500:
            res.status(500).json({
                success: false,
                error: "Internal Server Error",
                message,
            });
            break;
        case Errors.Error_501:
            res.status(500).json({
                success: false,
                error: "Not Implemented",
                message,
            });
            break;

        case Errors.Error_502:
            res.status(500).json({
                success: false,
                error: "Wrong Gateway",
                message,
            });
            break;

        case Errors.Error_503:
            res.status(500).json({
                success: false,
                error: "Service Unavailable",
                message,
            });
            break;

        case Errors.Error_504:
            res.status(500).json({
                success: false,
                error: "Request Timed out",
                message,
            });
            break;

        default:
            res.status(statusCode).json({
                success: false,
                error: "Unknown Error",
                message,
            });
            break;
        }


    }

}

export const errorHandler = new ErrorHandler;