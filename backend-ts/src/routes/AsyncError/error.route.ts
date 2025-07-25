import { NextFunction, Router,Request,Response } from "express";

export const asyncErrorRouter = Router();


asyncErrorRouter.get('/error', async (req:Request, res:Response, next:NextFunction) => {
  try {
    throw new Error('Something went wrong');
  } catch (err) {
    next(err); 
  }
});