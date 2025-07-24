import { Router } from "express";
import {userRouter} from "./QuestionsRoutes/user.route"
import { loginRouter } from "./QuestionsRoutes/login.route";
import { dashBoardRouter } from "./QuestionsRoutes/dashboard.route";
import { loggerRouter } from "./QuestionsRoutes/loggerCheck.route";
import { errorRoute } from "./QuestionsRoutes/ErrorLog.route";
import { multiRoute } from "./QuestionsRoutes/multi.route";
import { headerRouter } from "./QuestionsRoutes/header.route";
import { rateRouter } from "./QuestionsRoutes/rateLimiter.route";
import { loginValidaterouter } from "./validation/loginValidator.route";
import { checkRouter } from "./validation/check.route";
import { queryRouter } from "./validation/queryCheck.route";
import { locationRouter } from "./validation/locationValidation.route";
import { dynamicRouter1 } from "./validation/dynamicRoute1.route";
import { dynamicRouter2 } from "./validation/dynamicRoute2.route";


const Allrouter = Router();

Allrouter.use(userRouter);
Allrouter.use(loginRouter);
Allrouter.use(dashBoardRouter);
Allrouter.use(loggerRouter);
Allrouter.use(errorRoute);
Allrouter.use(multiRoute);
Allrouter.use(headerRouter);
Allrouter.use(rateRouter);
Allrouter.use(loginValidaterouter);
Allrouter.use(checkRouter);
Allrouter.use(queryRouter);
Allrouter.use(locationRouter)
Allrouter.use(dynamicRouter1);
Allrouter.use(dynamicRouter2);

export {Allrouter};