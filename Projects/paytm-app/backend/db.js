const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/paytm")

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,

})

const User=mongoose.model("User",userSchema)