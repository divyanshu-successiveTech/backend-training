"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic1 = void 0;
class Dynamic1Controller {
    dynamicOne(req, res, next) {
        res.status(200).send("Successfull log in to student");
    }
}
exports.dynamic1 = new Dynamic1Controller;
