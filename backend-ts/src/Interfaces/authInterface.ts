import { NextFunction ,Request,Response} from "express";

interface AuthInterface{
    getAuth:(req:Request,res:Response,next:NextFunction)=>void;

}

export default AuthInterface;