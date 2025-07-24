const PersonDetails = require("../Models/UserRegisterSchema")
export interface Person{
    userName:String,
    email:String,
    password:String

}


class UserRegisterService implements UserRegisterService{

    async userSave(data:Person){
        const user = new PersonDetails(data);
        await user.save();
        return user;
        

    }

    async findUserData(userName:String){
        const val = await PersonDetails.findOne({userName:userName});
        return val;

    }

}

export const userRegisterService = new UserRegisterService