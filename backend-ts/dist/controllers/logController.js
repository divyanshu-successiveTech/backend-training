"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logController = void 0;
class LogController {
    log(req, res) {
        res.send("Loggin done");
    }
}
exports.logController = new LogController;
