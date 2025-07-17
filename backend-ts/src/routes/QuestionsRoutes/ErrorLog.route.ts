import { NextFunction, Router } from "express";
import { second } from "../../utils/second";
import { first } from "../../utils/first";

import { Request,Response } from "express";

const errorRoute = Router();

errorRoute.get("/errorcheck",first,second,(req:Request,res:Response,next:NextFunction)=>{

    try {
    throw new Error("Something went wrong");
  } catch (err) {
    next(err); 
  }

})

export {errorRoute}