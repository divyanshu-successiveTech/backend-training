import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router422 = Router();


Router422.post('/api/registering', (req:Request, res:Response, next:NextFunction) => {
  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return next(createError(422, 'Invalid email address'));
  }
  res.send("the email is "+ email);
});
