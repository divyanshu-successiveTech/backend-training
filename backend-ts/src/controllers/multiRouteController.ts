import { Response,Request,NextFunction } from "express"
import { MultiRouteInterface } from "../Interfaces/multiRouteInterface";

class multiRouteController implements MultiRouteInterface{

    multiRoutes(req:Request,res:Response,next:NextFunction){
        res.send("All done")

    }



}

export const multiRoutesController = new multiRouteController;