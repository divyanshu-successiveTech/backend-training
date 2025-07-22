import { Request,Response,NextFunction, Router } from "express";
import { multi1 } from "../../middleware/multi1";
import { multi2 } from "../../middleware/multi2";
import { multiRoutesController } from "../../controllers/multiRouteController";

const multiRoute = Router();

multiRoute.get("/multi",multi1.multi1,multi2.multi2,multiRoutesController.multiRoutes);

export {multiRoute}