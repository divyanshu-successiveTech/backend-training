import { NextFunction ,Request,Response} from "express-serve-static-core";



export const obj={limit:3,
    running:0
}


class RateLimiter{

  rateLimiter (req: Request, res: Response, next: NextFunction){
  if (obj.running >= obj.limit) {
    return res.status(429).send("Rate limit exceeded");
  }

  obj.running++;
  console.log(`Running: ${obj.running}`);
  next();
};



}



export const rateLimiter = new RateLimiter;