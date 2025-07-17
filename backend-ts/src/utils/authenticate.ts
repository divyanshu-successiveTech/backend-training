import { Request,Response,NextFunction } from "express"
import { default as jwt } from 'jsonwebtoken';




const authenticate=(req:Request,res:Response,next:NextFunction)=>{
  const secret = process.env.JWT_SECRET || "";

    const authHead = req.headers['authorization'];
    const token = authHead && authHead.split(' ')[1];
    
    if (!token) {
    return res.sendStatus(400);
  }


    jwt.verify(token, secret, (err) => {
    if (err) return res.sendStatus(403); 
    next();
  });




}
export {authenticate}