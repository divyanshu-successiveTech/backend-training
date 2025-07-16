const express = require('express');

import { type Request,type Response } from "express";
import { Allrouter } from "./routes/route";
import { errorLogger } from "./utils/errorLogger";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/begin",Allrouter)

app.use(errorLogger);



app.listen(port,()=>{
  console.log(`Running on port ${port}`);
})