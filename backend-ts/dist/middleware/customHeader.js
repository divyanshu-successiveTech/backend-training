"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHead = void 0;
const custom = process.env.CUSTOM_HEADER;
class CustomHead {
    customHeader(req, res, next) {
        const head = custom;
        req.headers["customHead"] = head;
        next();
    }
}
exports.customHead = new CustomHead;
