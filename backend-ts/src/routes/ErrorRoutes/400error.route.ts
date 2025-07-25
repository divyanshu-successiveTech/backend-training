import { NextFunction, Router,Request,Response } from "express";
import createError from 'http-errors';

const Router400 = Router(); 

Router400.post('/api/users', (req:Request, res:Response, next:NextFunction) => {
    const { username } = req.body || {};
    console.log(username);
  if (!username) {
    return next(createError(400, 'Username is required'));
  }

  res.send("The name of user is " + username);


});

export {Router400}