const mongoose=require("mongoose");
const admindataSchema=new mongoose.Schema({

    AreaName:String,
    Email:String,
    geofencedata:{
        Latitiude:String,
        Longitude:String,
        user:
        {
            useremail:String,   
        }
    },
});

const Adminmodel=mongoose.model("Admins",admindataSchema);

module.exports=Adminmodel;