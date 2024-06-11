const express=require("express");
const app=express();
app.use(express.json());

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://b20ec33:l0NVOiTPTWAncRHw@cluster0.itjmjiy.mongodb.net/userappnew");//userapp new is the database where i want to store thus we have to write it in the link

const User = mongoose.model('Users', { name: String ,email:String,password:String}); //users table created

const user1 = new User({ name: 'Harkirat' ,email:"trz@gmail.com",password:"12345"}); //this is my entry
//user1.save().then(() => console.log('meow'));  //do this to save in database


//you can also do something like
app.post("/signup",async function(req,res){
    const username=req.body.name;
    const userpassword=req.body.password;
    const useremail=req.body.email;
    
    
    const existing =await User.findOne({email:useremail});
    if(existing){
        return res.status(400).send("user already exists");
    }

    const user=new User({
            name:username,
            email:useremail,
            password:userpassword
    });

    user.save();
    res.json({"msg":"user created successfully"})
})

app.listen(3000);