import { NextFunction, Request,Response } from "express";
import { userRegisterService } from "../service/userRegisterService";
import { default as jwt } from "jsonwebtoken";
import { userRegisterControllerInterface } from "../Interfaces/userRegisterControllerInterface";
   import bcrypt from 'bcrypt';
const secret =process.env.JWT_SECRET || ""


class UserRegisterController implements userRegisterControllerInterface{
    async userDetails(req:Request,res:Response,next:NextFunction){

        const bodyValue = req.body;
        const pass = await bcrypt.hash(bodyValue.password,7);
        bodyValue.password = pass;
        
        const result = await userRegisterService.userSave(bodyValue)
        console.log("User Details:",result);

         
        
        const token=jwt.sign(req.body,secret,{expiresIn:'1h'});
        

        res.send({status:200,
            message:"User registered successfully",
            token:token,
            user:{result}
        })
    }

    async getData(req:Request,res:Response){
        const {userName,email,password} = req.body;
        const userValues = await userRegisterService.findUserData(userName);

        if(userValues){
            await bcrypt.compare(password,userValues.password)? res.send("LOGIN SUCCESSFULL") : res.send("INVALID PASSWORD");
        }else{
            res.send("User does not Exist")
        }
    }
}

export const userRegisterController = new UserRegisterController;