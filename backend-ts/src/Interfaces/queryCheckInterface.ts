import Joi from "joi"

export interface QueryCheckInterface{
    queryCheck:(schema:Joi.ObjectSchema)=>void
}