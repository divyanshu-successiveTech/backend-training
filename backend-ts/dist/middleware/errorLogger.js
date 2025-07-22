"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = void 0;
class ErrorLogger {
    constructor() {
        this.errorLogger = (err, req, res, next) => {
            console.log(`Error: ${err} at ${req.baseUrl} `);
            return res.status(400).send(err.message);
        };
    }
}
exports.errorLogger = new ErrorLogger;
