import { Router } from "express";
import { obj, rateLimiter } from "../../utils/rateLimiter";
import { Response,Request } from "express";


const rateRouter= Router();

rateRouter.use(rateLimiter);


rateRouter.get('/limit', (req: Request, res: Response) => {
  setTimeout(() => {
    res.send(`Called ${obj.running}`);

    obj.running--;
    console.log(`Freed up. Running: ${obj.running}`);
  }, 2000);
});

export {rateRouter}