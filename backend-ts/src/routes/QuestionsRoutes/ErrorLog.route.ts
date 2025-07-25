import { NextFunction, Router } from "express";
import { second } from "../../middleware/second";
import { first } from "../../middleware/first";

import { Request,Response } from "express";
import { errorLogController } from "../../controllers/errorLoggerController";

const errorRoute = Router();

errorRoute.get("/errorcheck",first.firstmiddleware,second.secondmiddleware,errorLogController.errorLogController)

export {errorRoute}