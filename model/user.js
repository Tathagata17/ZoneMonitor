const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({

    Name:String,
    Email:String,
    Password:String,
    phone:Number
});

const usermodel=mongoose.model("user",userSchema);

module.exports=usermodel;