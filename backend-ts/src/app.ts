const express = require('express');

import { type Request,type Response } from "express";
const app = express();
const port = 3000;

const data:{id:number,data:string}[]=require('./mockData')

app.get('/', (req:Request, res:Response) => {
  res.send(data);
});

app.listen(port,()=>{
  console.log(`Running on port ${port}`);
})