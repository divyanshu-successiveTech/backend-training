import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router503 = Router();


Router503.get('/api/unavailable', (req:Request, res:Response, next:NextFunction) => {
  const unavailable = true; 
  if (unavailable) {
    return next(createError(503, 'Service is unavailable'));
  }
});