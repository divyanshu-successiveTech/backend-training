import { Request,Response,NextFunction } from "express";

import mockData from "../mockData";
import { PostDataInterface } from "../Interfaces/postDataInterface";


class PostData implements PostDataInterface{

    postData  (req:Request,res:Response,next:NextFunction){
        const {count}= req.body;
    
        res.send(mockData.slice(0,count));
    }

}


export const postData = new PostData