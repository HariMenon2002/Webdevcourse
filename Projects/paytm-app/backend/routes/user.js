/*
Define a new router in backend/routes/user.js and import it in index router
Route all requests that go to  /api/v1/user to user router
*/

const express=require("express") 
const JWT_SECRET=require("../config")
const zod=require("zod")
const { User } = require("../db")
const {authMiddleware}=require("../middleware")
const jwt=require("jsonwebtoken")
  
// Creating express Router 
const router=express.Router()
const signupSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
}) 
  
router.post("/signup",authMiddleware,async (req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message:"email already taken/incorrect inputs"
        })
    }

    const user=User.findOne({
        username:body.username
    })

    if(user._id){
        return res.json({
            message:"email already taken/incorrect inputs"
        })
    }

    const dbUser=await User.create(body);
    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)

    res.json({
        message:"user created successfully",
        token:token
    })

})


router.put("/",authMiddleware,async (req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message:"error while updating json"
        })
    }

    await User.updateOne(req.body,{
        id:req.userId
    })

    res.json({
        message:"updated successfully",
    })

})

//now i need a route where users can search for their friend
//like regex
//the query parameter used is usually ?filter=harkirat

router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter||"";

    const users=await User.find({
        $or:[{                       //$or is used to do two queries at a time
            //ie i want to see either firstName of lastName matches with the filter
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastname:user.lastName,
            _id:user._id
        }))
    })
})


module.exports=router