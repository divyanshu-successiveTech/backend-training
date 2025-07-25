import { Request,Response,NextFunction } from "express"
import { locationInterface } from "../Interfaces/locationInterface"

class LocationController implements locationInterface{
    
    locationUpdate(req:Request,res:Response,next:NextFunction){
        res.status(res.locals.status).json({"Message":res.locals.message})

    }
}

export const locationController = new LocationController