import { Router,Request,Response } from "express";
import { customHead } from "../../middleware/customHeader";
import { customHeaderController } from "../../controllers/customeHeaderController";

const headerRouter= Router();

headerRouter.get("/header",customHead.customHeader,customHeaderController.customHeader)

export {headerRouter}