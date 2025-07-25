"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multi2 = void 0;
class Multi2 {
    multi2(req, res, next) {
        console.log("At second middleware");
        next();
    }
}
exports.multi2 = new Multi2;
