import { NextFunction, Router,Request,Response } from "express";
import createError from 'http-errors';

export const router401 = Router();

router401.use("/api/private",(req:Request,res:Response,next:NextFunction)=>{
  const token = req.headers['authorization'];

  if(!token || token !== "Authorized"){
    return next(createError(401, 'Unauthorized'));
  }

  res.send("Authorized to take further actions")

})

