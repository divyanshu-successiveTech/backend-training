"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divide = exports.Multiply = exports.Subtract = exports.Add = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Add = (num1, num2) => {
    return lodash_1.default.add(num1, num2);
};
exports.Add = Add;
const Subtract = (num1, num2) => {
    return lodash_1.default.subtract(num1, num2);
};
exports.Subtract = Subtract;
const Multiply = (num1, num2) => {
    return lodash_1.default.multiply(num1, num2);
};
exports.Multiply = Multiply;
const Divide = (num1, num2) => {
    return lodash_1.default.divide(num1, num2);
};
exports.Divide = Divide;
// module.exports={
//     Add,
//     Subtract,
//     Multiply,
//     Divide
// }
