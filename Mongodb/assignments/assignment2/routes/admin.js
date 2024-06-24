const {Admin, Course, User}=require("../db/index")
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {JWT_SECRET}=require("../config");
const jwt=require("jsonwebtoken")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //check if username already exists
    await Admin.create({
        username:username,
        password:password         //if you want you can create more parameters too
    })
    res.json({message:"admin created successfully"}) //it will be available in the course_selling_app database in mongodb
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.find({
        username,
        password
    })
    
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({           //use this token for authorizatoin
            token
        })
    }   
    else{
        res.status(411).json({
            message:"incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;   //you can use zod for verification if you want

    const newCourse=await Course.create({              
        title:title,
        description,     //if key and value are same i can write just only one time like here instead of description:description
        imageLink,
        price

    })
    console.log(newCourse)  

    res.json({
        message:'course created successfully',courseId:newCourse._id   //id is something which is assigned by Mongodb itself
    })

    //dont forget to add the headers while calling this
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({ })  //ie i want all courses, find({price:4000}) would give me course worth 4000
    res.json({
        courses:response
    })
});


module.exports = router;