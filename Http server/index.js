// First do npm init -y
//then do npm install express   to download it locally
//then do npm install body-parser

const express=require("express");
const bodyParser=require("body-parser");
const port=process.env.PORT||3000     //PORT is now an env variable which can be set in the terminal , eg. in the terminal do export PORT=3005 and now run the program
const app=express();

//middleware
app.use(bodyParser.json()); //this json is then sent to req.body   you can also do app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/hari',(req,res)=>{
    res.json({name:"hello world",age: 22})
})

app.post('/conversation',(req,res)=>{           // add a body as well in thuderclient
    console.log(req.headers)
    const message=req.body.message
    console.log(req.body)   //this is where i need body-parser   you can also do req.query.message
    res.send({
        msg: "2+2=4"
    })
})


app.listen(port,()=>{
    console.log(`example on port ${port}`)
})


/*
1.Try running ipconfig in git bash to get ip
2.Try ping google.com to get googles ip address
3.Query is basically whatever is there after the ? in the url
*/