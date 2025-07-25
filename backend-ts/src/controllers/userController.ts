import { Request, Response, NextFunction } from "express";
import mockData from "../mockData";
import { userservice } from "../service/userService";
import UserInterface from "../Interfaces/userInterface";
const User = require("../Models/UserSchema")


class UserController implements UserInterface{


  getUserData(req: Request, res: Response, next: NextFunction): void {
    try {
      res.send(mockData);
    } catch (error) {
      next(error);
    }
  }

  async findUser(req:Request,res:Response,next:NextFunction):Promise<typeof User>{
       const users = await  userservice.findUser()
       console.log(users)
      
      res.send({
        code:200,
        status:"OK",
        data:{users}
      });
  
  
  }
}

export const userController = new UserController();