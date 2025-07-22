import { Response,Request,NextFunction } from "express"
import { Dynamic1Interface } from "../Interfaces/dynamic1Interface"

class Dynamic1Controller implements Dynamic1Interface{

    dynamicOne(req:Request,res:Response,next:NextFunction){
        res.status(200).send("Successfull log in to student")
    
    
    }

}

export const dynamic1 = new Dynamic1Controller