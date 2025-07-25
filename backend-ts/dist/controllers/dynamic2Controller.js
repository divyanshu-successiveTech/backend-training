"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic2 = void 0;
class dynamic2Controller {
    dynamic2Controller(req, res, next) {
        res.status(200).send("Successfull log in to teacher");
    }
}
exports.dynamic2 = new dynamic2Controller;
