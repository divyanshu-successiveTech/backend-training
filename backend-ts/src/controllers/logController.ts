import {Request,Response } from "express";
import { logInterface } from "../Interfaces/logInterface";


class LogController implements logInterface{
    log(req:Request,res:Response){
        res.send("Loggin done");
    }

}

export const logController =  new LogController;