//this file is supposed to create a schema and export it
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/paytm")

const userSchema=mongoose.Schema({
    username:String,
    password:{
        type:String,
        minLength:3
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:String,

})

const User=mongoose.model("User",userSchema);

module.exports={
    User
}