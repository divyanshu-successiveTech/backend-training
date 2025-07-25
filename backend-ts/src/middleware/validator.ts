import { NextFunction,Request,Response } from "express";
import Joi from "joi"
import { ValidateJOIInterface } from "../Interfaces/ValidateJOIInterface";
export const userSchema = Joi.object({

    username: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email().required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});

class ValidateJOI implements ValidateJOIInterface{

    validateJoi (schema:Joi.ObjectSchema){
        return (req:Request,res:Response,next:NextFunction)=>{
    
        
    
        const {error} = schema.validate(req.body)
    
        if(error){
            return res.status(400).send("Invalid format")
        }
        next();
    }}

}


export const validateJOI= new ValidateJOI