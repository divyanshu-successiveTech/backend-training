"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleValodatorController = void 0;
const joi_1 = __importDefault(require("joi"));
const inputSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required(),
    age: joi_1.default.number().integer().required()
}).required();
class SampleValidatorController {
    sampleValidate(req, res, next) {
        const { error, value } = inputSchema.validate(req.body);
        if (error) {
            return next(error);
        }
        res.json({ success: true, data: value });
    }
}
exports.sampleValodatorController = new SampleValidatorController;
