const User = require("../Models/UserSchema")


class userService{

    async findUser(){
        const users = await User.find({});
        return users;

    }

}

export const userservice = new userService()