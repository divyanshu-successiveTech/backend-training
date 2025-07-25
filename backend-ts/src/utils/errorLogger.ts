import { NextFunction ,Request,Response} from "express";

const errorLogger =(err:Error,req:Request,res:Response,next:NextFunction)=>{

    console.log(`Error: ${err} at ${req.baseUrl} `);

    return res.status(400).send(err.message);

}

export {errorLogger}