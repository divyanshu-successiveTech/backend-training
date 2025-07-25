import { NextFunction, Router } from "express";
import { userSchema, validateJoi } from "../../utils/validator";
import { Request,Response } from "express";

const loginValidaterouter=Router();

loginValidaterouter.post("/loginValidate", validateJoi(userSchema),(req:Request,res:Response,next:NextFunction)=>{
    res.send("Login Successfull");
    next();

})

export {loginValidaterouter}