import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router429 = Router();

const tooManyRequests = true;

Router429.get('/api/ratelimit', (req:Request, res:Response, next:NextFunction) => {
  if (tooManyRequests) {
    return next(createError(429, 'Too Many Requests'));
  }

  res.send("Processing the requests");
});