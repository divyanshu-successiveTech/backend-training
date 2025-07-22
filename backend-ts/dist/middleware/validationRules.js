"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDynamicRoute = void 0;
const schemaList_1 = require("./schemaList");
class CheckDynamicRoute {
    constructor() {
        this.checkDynamicRoute = (req, res, next) => {
            const path = req.url.split("/");
            console.log(path);
            const currSchema = schemaList_1.schemaList[`${path[1]}`];
            if (!currSchema) {
                return res.status(404).send("Wrong path");
            }
            const { error } = currSchema.validate(req.body);
            console.log(req.body);
            if (error) {
                return res.status(400).send("Invalid format");
            }
            next();
        };
    }
}
exports.checkDynamicRoute = new CheckDynamicRoute;
