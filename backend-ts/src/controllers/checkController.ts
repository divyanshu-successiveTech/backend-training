import { Request,Response } from "express"
import { CheckInterface } from "../Interfaces/checkInterface"

class CheckController implements CheckInterface{


    check(req:Request,res:Response){
        res.send("Values are correct")

    }


}

export const checkController= new CheckController