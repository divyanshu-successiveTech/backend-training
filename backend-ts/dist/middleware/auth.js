"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
class Auth {
    getAuth(req, res, next) {
        console.log(req);
        next();
    }
}
exports.auth = new Auth();
