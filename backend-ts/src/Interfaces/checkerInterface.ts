import Joi from "joi";

export interface CheckerInterface{
    checkJoi :(schema:Joi.ObjectSchema)=>void;
}