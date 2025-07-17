import { Router,Request,Response } from "express";
import { customHeader } from "../../utils/customHeader";

const headerRouter= Router();

headerRouter.get("/header",customHeader,(req:Request,res:Response)=>{
    res.send(req.headers["customHead"]);
})

export {headerRouter}