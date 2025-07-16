import { Request,Response,NextFunction, Router } from "express";
import { multi1 } from "../../utils/multi1";
import { multi2 } from "../../utils/multi2";

const multiRoute = Router();

multiRoute.get("/multi",multi1,multi2,(req:Request,res:Response,next:NextFunction)=>{
    res.send("All done")

})

export {multiRoute}