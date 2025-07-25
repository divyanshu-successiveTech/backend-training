import { Request,Response,Router } from "express";
import { checkJoi, checkSchema } from "../../middleware/checker";
import { checkController } from "../../controllers/checkController";

const checkRouter= Router();

checkRouter.post("/checking",checkJoi.checkJoi(checkSchema),checkController.check)

export {checkRouter}