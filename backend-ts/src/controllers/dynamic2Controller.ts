import { Request,Response,NextFunction } from "express"
import { Dynamic2Interface } from "../Interfaces/dynamic2Interface"

class dynamic2Controller implements Dynamic2Interface{

    dynamic2Controller(req:Request,res:Response,next:NextFunction){
        res.status(200).send("Successfull log in to teacher")


    }

}

export const dynamic2 = new dynamic2Controller
