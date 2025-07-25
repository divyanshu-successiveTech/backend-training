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

         
        
        

        res.status(201).send({status:201,
            message:"User registered successfully",
            user:{result}
        })
    }

    async getData(req:Request,res:Response){
        const {userName,email,password} = req.body;
        const userValues = await userRegisterService.findUserData(userName);
        let token =""


        if(userValues){
            if(await bcrypt.compare(password,userValues.password)){
                token=jwt.sign(req.body,secret,{expiresIn:'1h'}); 
                res.send({Status:200,
                    Message:"LOGIN SUCCESSFULL",
                    Token:token,
                })
            }else{
                res.send("INVALID PASSWORD")

            }
             

        }else{
            res.send("User does not Exist")
        }
    }
}

export const userRegisterController = new UserRegisterController;