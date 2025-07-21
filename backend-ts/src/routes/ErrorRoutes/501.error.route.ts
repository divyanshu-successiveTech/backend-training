import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router501 = Router();


Router501.get('/api/progress', (req:Request, res:Response, next:NextFunction) => {
  return next(createError(501, 'This feature is not implemented yet'));
});

