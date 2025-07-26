import { NextFunction, Request,Response } from "express";
import Joi, { required } from "joi";

export const loginSchema = Joi.object({
    userName:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email().required(),
    role:Joi.string().default("user"),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
}) 



class RegisterValidator{

    validate=(schema:Joi.ObjectSchema)=>{
        return(req:Request,res:Response,next:NextFunction)=>{

            const details = req.body;
            console.log(details)

            const {error,value} = schema.validate(req.body);

            if(error){
                return next(error);
            }else{
                req.body.value=value;
           
                next();
            }

        }

    }
}

export const registerValidator = new RegisterValidator;