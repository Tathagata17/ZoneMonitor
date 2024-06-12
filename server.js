const bodyParser = require("body-parser");
const express=require("express");
const connectdb = require("./model/db");


const app=express();
connectdb();
app.listen(3000,()=>
{
    console.log("server is running");
})