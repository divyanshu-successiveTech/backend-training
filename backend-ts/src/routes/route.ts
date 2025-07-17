import { Router } from "express";
import {userRouter} from "./dataSeeding/user.route"
import { loginRouter } from "./dataSeeding/login.route";
import { dashBoardRouter } from "./dataSeeding/dashboard.route";
import { loggerRouter } from "./dataSeeding/loggerCheck.route";
import { errorRoute } from "./dataSeeding/ErrorLog.route";
import { multiRoute } from "./dataSeeding/multi.route";
import { headerRouter } from "./dataSeeding/header.route";
import { rateRouter } from "./dataSeeding/rateLimiter.route";
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