import { Router, Request,Response } from "express";
import { authenticate } from "../../utils/authenticate";

const dashBoardRouter = Router();

dashBoardRouter.get("/dashboard",authenticate ,(req:Request,res:Response)=>{
    res.send("welcome to dashboard")

})

export {dashBoardRouter}