import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router502 = Router();


Router502.get('/api/gateway', (req:Request, res:Response, next:NextFunction) => {
  const wrongGateway= true; 
  if (wrongGateway) {
    return next(createError(502, 'Going to wrong gateway'));
  }
});