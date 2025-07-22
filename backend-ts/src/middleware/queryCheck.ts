import Joi from "joi"
import { NextFunction ,Response,Request} from "express"
import { QueryCheckInterface } from "../Interfaces/queryCheckInterface"

export const querySchema = Joi.object({
    Num : Joi.number()

})

class QueryCheck implements QueryCheckInterface{
    
    queryCheck(schema:Joi.ObjectSchema){
    
        return (req:Request,res:Response,next:NextFunction)=>{
        
            
        
            const {value,error} = schema.validate(req.query)
        
            if(error){
                return res.status(400).send("Given query parameter is not number")
            }
            next();
        }
    
    }

}

export const queryCheck = new QueryCheck
