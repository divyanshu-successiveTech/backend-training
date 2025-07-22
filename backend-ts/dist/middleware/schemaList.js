"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaList = void 0;
const joi_1 = __importDefault(require("joi"));
const student = joi_1.default.object({
    firstName: joi_1.default.string().alphanum().min(3).max(30).required(),
    lastName: joi_1.default.string().alphanum().min(3).max(30).required(),
    age: joi_1.default.number()
});
const teacher = joi_1.default.object({
    teacherName: joi_1.default.string().alphanum().min(3).max(30).required(),
    subject: joi_1.default.string().required()
});
exports.schemaList = { student, teacher };
