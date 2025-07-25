import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router504 = Router();

const timeout = true; 


Router504.get('/api/timeout', (req:Request, res:Response, next:NextFunction) => {
  if (timeout) {
    return next(createError(504, 'Gateway Timeout'));
  }
});