import { Router } from "express";
import { queryCheck, querySchema } from "../../middleware/queryCheck";
import { Request,Response } from "express";
import { queryValidatorController } from "../../controllers/queryValidatorController";


const queryRouter = Router();

queryRouter.post("/query",queryCheck.queryCheck(querySchema),queryValidatorController.queryValidate)

export {queryRouter};