import { Request,Response } from "express";
import { HealthInterface } from "../Interfaces/healthInterface";

class HealthController implements HealthInterface{
    health(req:Request,res:Response){
        res.send("OK");
    }
}

export const healthController = new HealthController;