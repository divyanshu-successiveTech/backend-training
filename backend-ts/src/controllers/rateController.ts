import { Response,Request } from "express";
import { obj } from "../middleware/rateLimiter";
import { rateInterface } from "../Interfaces/rateInterface";


class Rate implements rateInterface{

        rateController(req: Request, res: Response){
    setTimeout(() => {
        res.send(`Called ${obj.running}`);

        obj.running--;
        console.log(`Freed up. Running: ${obj.running}`);
    }, 2000);
    }



}

export const rateController = new Rate;