import { NextFunction, Router ,Request,Response} from "express";
import Joi from "joi";


export const validatorRouter = Router();


const inputSchema = Joi.object({
  name: Joi.string().min(1).required(),
  age: Joi.number().integer().required()
}).required();

validatorRouter.post("/request",(req:Request,res:Response,next:NextFunction)=>{
    const {error, value } = inputSchema.validate(req.body);
    
    
    if( error){
        return next(error);
    }

    res.json({ success: true, data: value });

})
