import { NextFunction, Router ,Request,Response } from "express";
import createError from "http-errors"

export const Router409 = Router();


let existing = "ABC"
Router409.post('/api/sameusers', (req:Request, res:Response, next:NextFunction) => {
  const username = req.body.username;
  if (existing == username) {
    return next(createError(409, 'Username already exists'));
  }
  res.send("Hello to " + username);
});