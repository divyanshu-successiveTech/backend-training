import { Request,Response ,NextFunction} from "express";
import Joi from "joi";
import { sampleValidatorInterface } from "../Interfaces/sampleValidatorInterface";

const inputSchema = Joi.object({
  name: Joi.string().min(1).required(),
  age: Joi.number().integer().required()
}).required();

class SampleValidatorController implements sampleValidatorInterface{

    sampleValidate(req:Request,res:Response,next:NextFunction){
    const {error, value } = inputSchema.validate(req.body);
    
    
    if( error){
        return next(error);
    }

    res.json({ success: true, data: value });

}
}

export const sampleValodatorController = new SampleValidatorController