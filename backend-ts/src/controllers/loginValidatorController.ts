import { Request,Response,NextFunction } from "express";
import { loginValidatorInterface } from "../Interfaces/loginValidatorInterface";

class LoginValidatorController implements loginValidatorInterface{

    loginValidator(req:Request,res:Response,next:NextFunction){
        res.send("Login Successfull");
        next();

    }
}

export const loginValidatorController= new LoginValidatorController