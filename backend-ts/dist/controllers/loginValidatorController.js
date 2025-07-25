"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidatorController = void 0;
class LoginValidatorController {
    loginValidator(req, res, next) {
        res.send("Login Successfull");
        next();
    }
}
exports.loginValidatorController = new LoginValidatorController;
