import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router403 = Router();

const isAdmin = false;

Router403.use("/api/admin",(req:Request,res:Response,next:NextFunction)=>{
    
  if (!isAdmin) {
    return next(createError(403, 'Forbidden'));
  }

  res.send("Pesrmission allowed");


})