import { NextFunction ,Request,Response} from "express";
const User = require("../Models/UserSchema")



interface UserInterface{
    getUserData:(req: Request, res: Response, next: NextFunction)=>void;

    findUser:(req:Request,res:Response,next:NextFunction)=>Promise<typeof User>
}

export default UserInterface