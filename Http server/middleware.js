// Middleware is usually used to check constraints like query parameters,username and password in headers
//without middle ware


const express=require("express")

const app=express();


// app.get("/health-checkup",(req,res)=>{
//     const username=req.headers.username
//     const password=req.headers.password
//     const kidneyId=req.query.kidneyId

//     if(username!="hari"||password!='pass'){
//         res.status(400).json({"msg":"something is wrong"})
//     }

//     if(kidneyId!=1&&kidneyId!=2){
//         res.status(400).json({"msg":"something is wrong with kidney"})
//     }

//     res.json({msg:"your kidney is fine"})
// })

// app.listen(3000,()=>{console.log("listening")})
//in the link you can do https://localhost:3000/health-checkup?kidneyId=1
//and also set headers ie set password and username in header section in thunderclient

//this is a very dumb way

//NOTE: it is possible to give more than 1 callback function to app.get() and it gets executed in that order using next function
//it is usually used when  you have to do prechecks before a particular function


//the correct way using middleware
app.use(express.json()); //this is used to set express.json() middleware to all the routes after this line, you can also have other middlewares in app.use()

//express.json() is used to parse the body in post request ie .to get req.body
//thus we dont have to mention it everytime in route parameters like userMiddleware etc

function userMiddleware(req,res,next){
    const username=req.headers.username
    const password=req.headers.password
    if(username!="hari"&&password!="pass"){res.status(400).json({msg:"incorrect"})}
    else next();
}

function kidneyMiddleware(req,res,next){
    
    const kidneyId=req.query.kidneyId
    if(kidneyId!=1 &&kidneyId!=2){res.status(400).json({msg:"incorrect kidney"})}
    else next();
}

app.get("/health-checkup", userMiddleware,kidneyMiddleware,function(req,res){ 
         //do some kidney operation
         res.send("your heart is healthy")
});

app.get("/kidney-check", userMiddleware,kidneyMiddleware,function(req,res){
    //do some kidney operation
    res.send("your kidney is healthy")
});

//as userMiddleware and kidneyMiddleware is used in both, i could have just done app.use(userMiddleware)

app.listen(3000,()=>{console.log("listening")})