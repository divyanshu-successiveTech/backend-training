import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,

});

module.exports = mongoose.model("User",UserSchema,"User");
