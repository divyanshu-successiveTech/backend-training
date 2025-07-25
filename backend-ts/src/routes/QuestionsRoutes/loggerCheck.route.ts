import { Router} from "express";
import { logger } from "../../middleware/logger";
import { logController } from "../../controllers/logController";

const loggerRouter= Router();

loggerRouter.get("/log",logger.logger,logController.log)

export {loggerRouter}