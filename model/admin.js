const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({

    Name:String,
    Email:String,
    Password:String,
    phone:Number
});

const Adminmodel=mongoose.model("Admins",adminSchema);

module.exports=Adminmodel;