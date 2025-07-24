import { Request,Response,Router } from "express";
import { checkJoi, checkSchema } from "../../utils/checker";

const checkRouter= Router();

checkRouter.post("/checking",checkJoi(checkSchema),(req:Request,res:Response)=>{
    res.send("Values are correct")

})

export {checkRouter}