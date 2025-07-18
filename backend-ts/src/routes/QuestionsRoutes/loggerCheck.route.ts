import { Router,Request,Response } from "express";
import { logger } from "../../utils/logger";

const loggerRouter= Router();

loggerRouter.get("/log",logger,(req:Request,res:Response)=>{
    res.send("Loggin done");
})

export {loggerRouter}