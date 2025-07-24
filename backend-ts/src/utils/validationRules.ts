import { NextFunction ,Request,Response} from "express";
import { schemaList } from "./schemaList";


export const checkDynamicRoute=(req:Request,res:Response,next:NextFunction)=>{

    const path:string[] = req.url.split("/")
    console.log(path);
    const currSchema = schemaList[`${path[1]}`]
    if(!currSchema){
        return res.status(404).send("Wrong path");
    }

    const {error} = currSchema.validate(req.body)
    console.log(req.body);

    if(error){
        return res.status(400).send("Invalid format")
    }
    
    next();

}