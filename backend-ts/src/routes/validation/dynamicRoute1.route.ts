import { NextFunction, Router,Request,Response } from "express";
import { checkDynamicRoute } from "../../middleware/validationRules";
import { dynamic1 } from "../../controllers/dynamic1Controller";

export const dynamicRouter1 = Router();

dynamicRouter1.post("/student",checkDynamicRoute.checkDynamicRoute,dynamic1.dynamicOne)

