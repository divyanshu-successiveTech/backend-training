import { Request,Response } from "express";

class QueryValidatorController {

    queryValidate(req:Request,res:Response){
    const{Num}=req.query;
    res.send(Num)

}
}

export const queryValidatorController = new QueryValidatorController