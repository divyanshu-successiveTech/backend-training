const express= require('express');
import { NextFunction, type Request,type Response } from "express";


const app = express();

const users:{id:number,data:string}[] =[
    {id:1,data:"Data1"},
    {id:2,data:"Data2"},
    {id:3,data:"Data3"},
    {id:3,data:"Data4"},
    {id:5,data:"Data5"},
]


const middleware=(req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({
        error:"Server Error"
    });
}

app.use(middleware);


app.get("/api/users",middleware,(req:Request,res:Response)=>{
    
    res.json(users);
    

})

app.get("/api/abc",(req:Request,res:Response)=>{
    res.send("ABC")
    

})


app.listen(3000,()=>{
  console.log(`Running on port ${3000}`);
})
