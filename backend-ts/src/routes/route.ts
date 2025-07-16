import { Router } from "express";
import {userRouter} from "./dataSeeding/user.route"
import { loginRouter } from "./dataSeeding/login.route";
import { dashBoardRouter } from "./dataSeeding/dashboard.route";
import { loggerRouter } from "./dataSeeding/loggerCheck.route";
import { errorRoute } from "./dataSeeding/ErrorLog.route";
import { multiRoute } from "./dataSeeding/multi.route";
import { headerRouter } from "./dataSeeding/header.route";
import { rateRouter } from "./dataSeeding/rateLimiter.route";


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