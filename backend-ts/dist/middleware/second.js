"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.second = void 0;
class Second {
    secondmiddleware(req, res, next) {
        try {
            console.log("At first middleware");
            throw new Error("Something went wrong");
        }
        catch (err) {
            next(err);
        }
    }
}
exports.second = new Second;
