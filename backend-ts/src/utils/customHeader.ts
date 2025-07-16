import { NextFunction , Request,Response } from "express";

const customHeader=(req:Request,res:Response,next:NextFunction)=>{
    const head= "ABABABABABAB";
    req.headers["customHead"]=head;
    next();


}

export {customHeader}