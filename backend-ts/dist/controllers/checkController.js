"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkController = void 0;
class CheckController {
    check(req, res) {
        res.send("Values are correct");
    }
}
exports.checkController = new CheckController;
