"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateController = void 0;
const rateLimiter_1 = require("../middleware/rateLimiter");
class Rate {
    rateController(req, res) {
        setTimeout(() => {
            res.send(`Called ${rateLimiter_1.obj.running}`);
            rateLimiter_1.obj.running--;
            console.log(`Freed up. Running: ${rateLimiter_1.obj.running}`);
        }, 2000);
    }
}
exports.rateController = new Rate;
