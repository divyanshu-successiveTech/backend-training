"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = exports.obj = void 0;
exports.obj = { limit: 3,
    running: 0
};
class RateLimiter {
    rateLimiter(req, res, next) {
        if (exports.obj.running >= exports.obj.limit) {
            return res.status(429).send("Rate limit exceeded");
        }
        exports.obj.running++;
        console.log(`Running: ${exports.obj.running}`);
        next();
    }
    ;
}
exports.rateLimiter = new RateLimiter;
