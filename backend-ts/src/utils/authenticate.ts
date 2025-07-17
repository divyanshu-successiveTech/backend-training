import { Request,Response,NextFunction } from "express"
import { default as jwt } from 'jsonwebtoken';

const secret = "asdfgh"; 

const authenticate=(req:Request,res:Response,next:NextFunction)=>{

    const authHead = req.headers['authorization'];
    

    const token = authHead?.split(' ')[1] 
    console.log(token)
    
    if (!token) {
    return res.sendStatus(400);
  }


    jwt.verify(token, secret, (err) => {
    if (err) return res.sendStatus(403); 
    next();
  });




}
export {authenticate}