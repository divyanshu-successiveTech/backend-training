import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router405 = Router();


Router405.all('/api/readonly', (req:Request, res:Response, next:NextFunction) => {
  if (req.method !== 'GET') {
    return next(createError(405, 'Method Not Allowed'));
  }
  res.send('Read-only content');
});