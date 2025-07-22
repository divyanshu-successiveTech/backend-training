"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryValidatorController = void 0;
class QueryValidatorController {
    queryValidate(req, res) {
        const { Num } = req.query;
        res.send(Num);
    }
}
exports.queryValidatorController = new QueryValidatorController;
