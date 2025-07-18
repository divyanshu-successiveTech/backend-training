import { Request,Response,NextFunction } from "express";

const auth = (req:Request,res:Response,next:NextFunction)=>{

    console.log(req);
    
    next()
    
}

export{auth};

