import Joi from "joi"
import { NextFunction ,Response,Request} from "express"

export const querySchema = Joi.object({
    Num : Joi.number()

})

export const queryCheck=(schema:Joi.ObjectSchema)=>{

    return (req:Request,res:Response,next:NextFunction)=>{
    
        
    
        const {value,error} = schema.validate(req.query)
    
        if(error){
            return res.status(400).send("Given query parameter is not number")
        }
        next();
    }

}