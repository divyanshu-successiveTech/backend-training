import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const mongoValidator = Joi.object({
    firstName:Joi.string().alphanum().min(3).max(30).required(),
    lastName:Joi.string().alphanum().min(3).max(30).required(),

})

class ValidateMongo{
    validate(schema:Joi.ObjectSchema){

        return (req:Request,res:Response,next:NextFunction)=>{
            const {error,value} = schema.validate(req.body);

            if(error){
                return next(error);
            }else{
                req.body.value = value;
                next();
            }
        }
    }
}

export const validateMongo = new ValidateMongo;