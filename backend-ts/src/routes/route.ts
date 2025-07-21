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
import { Router400 } from "./ErrorRoutes/400error.route";
import { router401 } from "./ErrorRoutes/401error.route";
import { Router403 } from "./ErrorRoutes/403error.route";
import { Router405 } from "./ErrorRoutes/405error.route";
import { Router409 } from "./ErrorRoutes/409error.route";
import { Router422 } from "./ErrorRoutes/422.error.route";
import { Router429 } from "./ErrorRoutes/429.error.route";
import { Router501 } from "./ErrorRoutes/501.error.route";
import { Router500 } from "./ErrorRoutes/500.error.route";
import { Router502 } from "./ErrorRoutes/502.error.route";
import { Router503 } from "./ErrorRoutes/503.error.route";
import { Router504 } from "./ErrorRoutes/504error.route";
import { asyncErrorRouter } from "./AsyncError/error.route";
import { validatorRouter } from "./InputValidator/sampleValidator.route";


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
Allrouter.use(Router400);
Allrouter.use(router401);
Allrouter.use(Router403);
Allrouter.use(Router405);
Allrouter.use(Router409);
Allrouter.use(Router409);
Allrouter.use(Router422);
Allrouter.use(Router429);
Allrouter.use(Router500);
Allrouter.use(Router501);
Allrouter.use(Router502);
Allrouter.use(Router503);
Allrouter.use(Router504);
Allrouter.use(asyncErrorRouter);
Allrouter.use(validatorRouter);



export {Allrouter};