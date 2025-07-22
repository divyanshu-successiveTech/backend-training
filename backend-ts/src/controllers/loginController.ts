import { Request,Response } from "express";
import { default as jwt } from 'jsonwebtoken';
import { user } from "../routes/dataSeeding/values";
import { loginInterface } from "../Interfaces/loginInterface";

const secret =process.env.JWT_SECRET || ""


class LoginController implements loginInterface{

        loginController(req:Request,res:Response){
        

        const token=jwt.sign(user,secret,{expiresIn:'1h'});

        res.json({token})

    }

}

export const loginController = new LoginController