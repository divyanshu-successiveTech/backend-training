"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHeaderController = void 0;
class CustomHeaderController {
    customHeader(req, res) {
        res.send(req.headers["customHead"]);
    }
}
exports.customHeaderController = new CustomHeaderController;
