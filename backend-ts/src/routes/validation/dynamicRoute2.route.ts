import { Router } from "express";
import { checkDynamicRoute } from "../../middleware/validationRules";
import { Response,Request,NextFunction } from "express";
import { dynamic2 } from "../../controllers/dynamic2Controller";

export const dynamicRouter2 = Router();

dynamicRouter2.post("/teacher",checkDynamicRoute.checkDynamicRoute,dynamic2.dynamic2Controller)


