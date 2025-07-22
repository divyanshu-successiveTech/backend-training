"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationController = void 0;
class LocationController {
    locationUpdate(req, res, next) {
        res.status(res.locals.status).json({ "Message": res.locals.message });
    }
}
exports.locationController = new LocationController;
