import { Router } from "express";
import { healthController } from "../../controllers/healthController";

const healthRouter = Router();

healthRouter.use("/health",healthController.health);


export {healthRouter};