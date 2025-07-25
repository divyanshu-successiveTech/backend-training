"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogController = void 0;
class ErrorLogController {
    errorLogController(req, res, next) {
        try {
            throw new Error("Something went wrong");
        }
        catch (err) {
            next(err);
        }
    }
}
exports.errorLogController = new ErrorLogController;
