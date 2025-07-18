import { Request,Response,NextFunction } from "express";

import mockData from "../mockData";

const userController = (req:Request,res:Response,next:NextFunction)=>{

    res.send(mockData);
}

export {userController}