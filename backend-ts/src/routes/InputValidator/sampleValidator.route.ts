import { NextFunction, Router ,Request,Response} from "express";
import { sampleValodatorController } from "../../controllers/sampleValidatorController";


export const validatorRouter = Router();




validatorRouter.post("/request",sampleValodatorController.sampleValidate)
