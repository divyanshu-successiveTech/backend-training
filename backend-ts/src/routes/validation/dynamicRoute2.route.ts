import { Router } from "express";
import { checkDynamicRoute } from "../../utils/validationRules";
import { Response,Request,NextFunction } from "express";

export const dynamicRouter2 = Router();

dynamicRouter2.post("/teacher",checkDynamicRoute,(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send("Successfull log in to teacher")


})


