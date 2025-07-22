"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multi1 = void 0;
class Multi1 {
    multi1(req, res, next) {
        console.log("At first middleware");
        next();
    }
}
exports.multi1 = new Multi1;
