import { Request,Response,NextFunction, Router } from "express";
import { locationCheck } from "../../utils/locationCheck";

const locationRouter = Router();

locationRouter.get("/location",locationCheck,(req:Request,res:Response,next:NextFunction)=>{
    res.status(res.locals.status).json({"Message":res.locals.message})

})

export {locationRouter}