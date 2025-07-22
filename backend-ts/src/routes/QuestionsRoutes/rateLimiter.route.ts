import { Router } from "express";
import { obj, rateLimiter } from "../../middleware/rateLimiter";
import { Response,Request } from "express";
import { rateController } from "../../controllers/rateController";


const rateRouter= Router();




rateRouter.get('/limit', rateLimiter.rateLimiter,rateController.rateController);

export {rateRouter}