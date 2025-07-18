import { NextFunction , Request,Response } from "express";

const custom = process.env.CUSTOM_HEADER

const customHeader=(req:Request,res:Response,next:NextFunction)=>{
    const head= custom;
    req.headers["customHead"]=head;
    next();


}

export {customHeader}