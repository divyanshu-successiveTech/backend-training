"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiRoutesController = void 0;
class multiRouteController {
    multiRoutes(req, res, next) {
        res.send("All done");
    }
}
exports.multiRoutesController = new multiRouteController;
