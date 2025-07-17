import { Router } from "express";
import {userRouter} from "./QuestionsRoutes/user.route"
import { loginRouter } from "./QuestionsRoutes/login.route";
import { dashBoardRouter } from "./QuestionsRoutes/dashboard.route";
import { loggerRouter } from "./QuestionsRoutes/loggerCheck.route";
import { errorRoute } from "./QuestionsRoutes/ErrorLog.route";
import { multiRoute } from "./QuestionsRoutes/multi.route";
import { headerRouter } from "./QuestionsRoutes/header.route";
import { rateRouter } from "./QuestionsRoutes/rateLimiter.route";


const Allrouter = Router();

Allrouter.use(userRouter);
Allrouter.use(loginRouter);
Allrouter.use(dashBoardRouter);
Allrouter.use(loggerRouter);
Allrouter.use(errorRoute);
Allrouter.use(multiRoute);
Allrouter.use(headerRouter);
Allrouter.use(rateRouter);

export {Allrouter};