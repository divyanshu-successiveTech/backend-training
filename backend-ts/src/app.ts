import express from 'express';
import dotenv from 'dotenv';
import createError from 'http-errors';
dotenv.config();

import { Request, Response,NextFunction } from "express";
import { Allrouter } from "./routes/route";
import { errorLogger } from "./utils/errorLogger";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/begin",Allrouter)

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Not Found'));
});

app.use(errorLogger);





app.listen(port,()=>{
  console.log(`Running on port ${port}`);
})