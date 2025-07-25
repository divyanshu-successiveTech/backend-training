import { Router } from "express";
import { locationCheck } from "../../middleware/locationCheck";
import { locationController } from "../../controllers/locationController";

const locationRouter = Router();

locationRouter.get("/location",locationCheck.locationCheck,locationController.locationUpdate)

export {locationRouter}