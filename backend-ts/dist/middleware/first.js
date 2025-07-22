"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
class First {
    firstmiddleware(req, res, next) {
        try {
            console.log("At first middleware");
            throw new Error("Something went wrong in first middleware");
        }
        catch (err) {
            next(err);
        }
    }
}
exports.first = new First;
