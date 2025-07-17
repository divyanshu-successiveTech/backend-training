import { Router } from "express";
import { queryCheck, querySchema } from "../../utils/queryCheck";
import { Request,Response } from "express";


const queryRouter = Router();

queryRouter.post("/query",queryCheck(querySchema),(req:Request,res:Response)=>{
    const{Num}=req.query;
    res.send(Num)

})

export {queryRouter};