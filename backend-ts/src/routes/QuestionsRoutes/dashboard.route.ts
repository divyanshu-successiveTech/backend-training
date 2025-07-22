import { Router, Request,Response } from "express";
import { authenticate } from "../../middleware/authenticate";
import { authenticateController } from "../../controllers/authenticateController";

const dashBoardRouter = Router();

dashBoardRouter.get("/dashboard",authenticate.authenticate ,authenticateController.authenticateController)

export {dashBoardRouter}