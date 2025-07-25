import { NextFunction ,Request,Response} from "express-serve-static-core";

export interface rateLimterInterface{
    rateLimiter:(req: Request, res: Response, next: NextFunction)=>void;
}