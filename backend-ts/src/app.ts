import express from 'express';
import dotenv from 'dotenv';
import createError from 'http-errors';
dotenv.config();

import { Request, Response,NextFunction } from "express";
import { Allrouter } from "./routes/route";
import { errorLogger } from "./middleware/errorLogger";
import mongoose from 'mongoose';
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/swagger/swagger.yaml');


const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/SuccessiveDB");

const db = mongoose.connection;

db.once('open',()=>console.log("Connected"));

app.use("/begin",Allrouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Not Found'));
});

app.use(errorLogger.errorLogger);





app.listen(port,()=>{
  console.log(`Running on port ${port}`);
})