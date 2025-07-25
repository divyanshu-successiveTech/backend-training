import { NextFunction, Router ,Request,Response } from "express";

export const Router500 = Router();


Router500.get('/api/crash', (req:Request, res:Response, next:NextFunction) => {
  throw new Error('Unexpected server error');
});