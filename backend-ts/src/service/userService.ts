const User = require("../Models/UserSchema")


class userService{

    async findUser(){
        const users = await User.find({});
        return users;

    }


    async send(data:typeof User){
        await data.save();
        return data;
    }

}

export const userservice = new userService()