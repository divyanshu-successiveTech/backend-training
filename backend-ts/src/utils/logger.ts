import { NextFunction, Request,Response } from "express"

const logger =(req:Request,res:Response,next:NextFunction)=>{

    const time= Date.now();

    const { method, originalUrl, protocol,host } = req;


    let str=protocol+"://"+host+originalUrl;

    console.log(str,time,method);


    next();

}

export {logger};