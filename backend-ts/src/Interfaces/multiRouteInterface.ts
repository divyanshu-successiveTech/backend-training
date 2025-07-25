import { Request,Response,NextFunction } from "express"

export interface MultiRouteInterface{
    multiRoutes:(req:Request,res:Response,next:NextFunction)=>void
}