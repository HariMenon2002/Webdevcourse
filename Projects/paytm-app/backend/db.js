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

//you will also need another database to store the account balances
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',    //thus i cant put any userId here which does not have corresponding userId in User table
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports={
    User,
    Account
}