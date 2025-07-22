import { Request,Response } from "express";
import { AuthenticateInterface } from "../Interfaces/authenticateInterface";


class AuthenticateController implements AuthenticateInterface{

    authenticateController(req:Request,res:Response){
        res.send("welcome to dashboard")

    }
}

export const authenticateController = new AuthenticateController