import { NextFunction , Request,Response } from "express";
import { CustomHeaderMiddlewareInterface } from "../Interfaces/customHeaderMiddlewareInterface";

const custom = process.env.CUSTOM_HEADER

class CustomHead implements CustomHeaderMiddlewareInterface{

    customHeader(req:Request,res:Response,next:NextFunction){
        const head= custom;
        req.headers["customHead"]=head;
        next();
    
    
    }

    
}


export const customHead = new CustomHead