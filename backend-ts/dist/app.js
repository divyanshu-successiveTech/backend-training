"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_errors_1 = __importDefault(require("http-errors"));
dotenv_1.default.config();
const route_1 = require("./routes/route");
const errorLogger_1 = require("./middleware/errorLogger");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/SuccessiveDB");
const db = mongoose_1.default.connection;
db.once('open', () => console.log("Connected"));
app.use("/begin", route_1.Allrouter);
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404, 'Not Found'));
});
app.use(errorLogger_1.errorLogger.errorLogger);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
