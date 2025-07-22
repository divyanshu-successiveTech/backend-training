"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRouter = void 0;
const express_1 = require("express");
const locationCheck_1 = require("../../middleware/locationCheck");
const locationController_1 = require("../../controllers/locationController");
const locationRouter = (0, express_1.Router)();
exports.locationRouter = locationRouter;
locationRouter.get("/location", locationCheck_1.locationCheck.locationCheck, locationController_1.locationController.locationUpdate);
