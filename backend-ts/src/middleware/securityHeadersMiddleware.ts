import { NextFunction, Request,Response } from "express";
import helmet from "helmet";

class SecurityHeaderMiddleware {
  giveSecurityHeader = (req: Request, res: Response, next: NextFunction) => {
    return helmet()
  };
}

export const securityHeaderMiddleware = new SecurityHeaderMiddleware;