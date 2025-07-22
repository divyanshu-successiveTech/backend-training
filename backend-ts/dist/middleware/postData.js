"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = void 0;
const mockData_1 = __importDefault(require("../mockData"));
class PostData {
    postData(req, res, next) {
        const { count } = req.body;
        res.send(mockData_1.default.slice(0, count));
    }
}
exports.postData = new PostData;
