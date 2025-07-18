import { NextFunction,Request,Response } from "express";
import Joi from "joi"
export const userSchema = Joi.object({

    username: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email().required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});

const validateJoi =(schema:Joi.ObjectSchema)=>{
    return (req:Request,res:Response,next:NextFunction)=>{

    

    const {error} = schema.validate(req.body)

    if(error){
        return res.status(400).send("Invalid format")
    }
    next();
}}

export {validateJoi};