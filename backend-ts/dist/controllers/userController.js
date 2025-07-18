"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const mockData_1 = __importDefault(require("../mockData"));
const userController = (req, res, next) => {
    res.send(mockData_1.default);
};
exports.userController = userController;
