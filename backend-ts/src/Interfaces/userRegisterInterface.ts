import { Person } from "../service/userRegisterService";
export interface UserRegisterInterface{
    userSave:(data:Person)=>Promise<any>;
}