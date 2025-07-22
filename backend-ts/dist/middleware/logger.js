"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
class Logger {
    logger(req, res, next) {
        const time = Date.now();
        const { method, originalUrl, protocol, host } = req;
        let str = protocol + "://" + host + originalUrl;
        console.log(str, time, method);
        next();
    }
}
exports.logger = new Logger;
