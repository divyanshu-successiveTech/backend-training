import { Request,Response,NextFunction } from "express";

import mockData from "../mockData";

const postData = (req:Request,res:Response,next:NextFunction)=>{
    const {count}= req.body;

    res.send(mockData.slice(0,count));
}

export {postData}