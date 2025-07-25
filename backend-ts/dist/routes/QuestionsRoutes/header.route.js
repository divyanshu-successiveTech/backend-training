"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerRouter = void 0;
const express_1 = require("express");
const customHeader_1 = require("../../middleware/customHeader");
const customeHeaderController_1 = require("../../controllers/customeHeaderController");
const headerRouter = (0, express_1.Router)();
exports.headerRouter = headerRouter;
headerRouter.get("/header", customHeader_1.customHead.customHeader, customeHeaderController_1.customHeaderController.customHeader);
