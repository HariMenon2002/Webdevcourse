const {User, Course}=require("../db/index")
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {    //this actually means /admin/signup
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    //check if username already exists
    await User.create({
        username:username,
        password:password         
    })
    res.json({message:"user created successfully"})
});

router.get('/courses', async (req, res) => {  //no middleware needed here as anyone should be able to see all the courses   
    // Implement listing all courses logic
    const response=await Course.find({ })  
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    //dont forget to put headers while requesting
    //courseId will be the id in the course's objects(look at compass)

    //The difference here is that there is no seperate table for purchased courses, here we are relying on the reference purchasedCourses
    const courseId=req.params.courseId;
    const username=req.headers.username;
    await User.updateOne({
        username:username     //update the one with this username
    },{
        "$push":{
            purchasedCourses:courseId     
        }
    });
    res.json({
        message:"purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({
        username:req.headers.username
    });

    console.log(user.purchasedCourses);    //prints an array of object ids of purchased courses

    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
});

module.exports = router
