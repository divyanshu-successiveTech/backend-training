import { Request,Response } from "express";
import { CustomHeaderInterafce } from "../Interfaces/customHeaderInterface";

class CustomHeaderController implements CustomHeaderInterafce{

    customHeader(req:Request,res:Response){
        res.send(req.headers["customHead"]);
    }

}

export const customHeaderController = new CustomHeaderController;