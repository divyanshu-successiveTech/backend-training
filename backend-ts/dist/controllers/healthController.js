"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthController = void 0;
class HealthController {
    health(req, res) {
        res.send("OK");
    }
}
exports.healthController = new HealthController;
