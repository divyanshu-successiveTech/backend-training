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
import { asyncErrorRouter } from "./AsyncError/error.route";
import { validatorRouter } from "./InputValidator/sampleValidator.route";
import { mongoRouter } from "./CRUD Operations/Operations.route";
import { healthRouter } from "./HealthCheck/healthCheck";
import { authenticateRegisterRouter } from "./AuthenticateLogin/authenticateRegister";
import { authenticateLoginRouterLoginRouter } from "./AuthenticateLogin/authenticateLogin";



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
Allrouter.use(asyncErrorRouter);
Allrouter.use(validatorRouter);
Allrouter.use(mongoRouter);
Allrouter.use(healthRouter);
Allrouter.use(authenticateRegisterRouter)
Allrouter.use(authenticateLoginRouterLoginRouter)


export {Allrouter};