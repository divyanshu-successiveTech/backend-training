import { Request,Response } from "express"

export interface rateInterface{
    rateController:(req: Request, res: Response)=>void


}