//create a new file backend/routes/index.js that exports a new express router

//import userRouter here so all request to /api/v1/user goes to userRouter
const express=require("express") 

// Creating express Router 
const router=express.Router() 

const userRouter=require("./user")
const accountRouter = require("./account");

//for eg you can do
// router.get("/",(req,res,next)=>{ 
//   res.send("This is the login request") 
// }) 

router.use("/user",userRouter)
router.use("/account", accountRouter);

module.exports=router