import { Router } from "express";
import { userSchema, validateJoi } from "../../utils/validator";
import { Request,Response } from "express";

const loginValidaterouter=Router();

loginValidaterouter.post("/loginValidate", validateJoi(userSchema),(req:Request,res:Response)=>{
    res.send("Login Successfull");

})

export {loginValidaterouter}