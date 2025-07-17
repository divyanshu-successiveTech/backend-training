import { Router } from "express";
import { Request,Response } from "express";
import { default as jwt } from 'jsonwebtoken';
import { user } from "../dataSeeding/values";
const secret =process.env.JWT_SECRET || ""

const loginRouter = Router();

loginRouter.post("/login",(req:Request,res:Response)=>{
    

    const token=jwt.sign(user,secret,{expiresIn:'1h'});

    res.json({token})

})

export {loginRouter}
