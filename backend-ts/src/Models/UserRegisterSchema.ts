import mongoose from "mongoose";
const UserRegisterSchema = new mongoose.Schema({
    userName: {unique: true,type: String},
    email:String,
    password:String,
    role:String,

});

module.exports = mongoose.model("PersonDetails",UserRegisterSchema,"PersonDetails");
