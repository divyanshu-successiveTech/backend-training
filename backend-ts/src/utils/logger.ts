import { NextFunction, Request,Response } from "express"

const logger =(req:Request,res:Response,next:NextFunction)=>{

    const time= Date.now();
    const method=req.method;
    const path=req.originalUrl
    const protocol=req.protocol;
    const localhost=req.host;

    let str=protocol+"://"+localhost+path;

    console.log(str,time,method);


    next();

}

export {logger};