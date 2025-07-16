import { Router } from "express";
import { Request,Response } from "express";
import { default as jwt } from 'jsonwebtoken';
const secret ="asdfgh"

const loginRouter = Router();

loginRouter.post("/login",(req:Request,res:Response)=>{
    const user={id:1,userName:"ABC"};

    const token=jwt.sign(user,secret,{expiresIn:'1h'});

    res.json({token})

})

export {loginRouter}
