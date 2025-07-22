import { Request,Response,NextFunction } from "express";
import AuthInterface from "../Interfaces/authInterface";

class Auth implements AuthInterface{

    getAuth(req:Request,res:Response,next:NextFunction){

        console.log(req);
    
        next()
        
    }


}



export const auth = new Auth()

