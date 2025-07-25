"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCheck = exports.querySchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.querySchema = joi_1.default.object({
    Num: joi_1.default.number()
});
class QueryCheck {
    queryCheck(schema) {
        return (req, res, next) => {
            const { value, error } = schema.validate(req.query);
            if (error) {
                return res.status(400).send("Given query parameter is not number");
            }
            next();
        };
    }
}
exports.queryCheck = new QueryCheck;
