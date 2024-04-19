// First do npm init -y
//then do npm install express   to download it locally
//then do npm install body-parser

const express=require("express");
const bodyParser=require("body-parser");
const port=3000
const app=express();

users=[]

//middleware
app.use(bodyParser.json()); //this json is then sent to req.body

app.get('/',(req,res)=>{
    res.send(`hello world ${users.length}`)
    
})

app.get('/hari',(req,res)=>{
    res.json({name:"hello world",age: 22})
})

app.post('/conversation',(req,res)=>{           // add a body as well in thuderclient
    console.log(req.headers)
    console.log(req.body)   //this is where i need body-parser
    //console.log(req.body["message"])   
    res.send({
        msg: "2+2=4"
    })

    users.push("hi");         //each time post request is sent , hi is stored in users , thus after this if you do get req again you will see users length as updated
})


app.get("/files/:fileName",(req,res)=>{  //by putting : here means i can put anything while giving get req as well eg. localhost:3000/files/hari.txt
      const name=req.params.fileName
      console.log(name)
      
})

app.listen(port,()=>{
    console.log(`example on port ${port}`)
})


/*
1.Try running ipconfig in git bash to get ip
2.Try ping google.com to get googles ip address
3.if you need to show another status code eg. res.status(400).json({...})
*/

