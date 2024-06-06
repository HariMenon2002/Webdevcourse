//error handling middleware

const express=require("express")
const app=express()

app.use(express.json())

app.post("/health-checkup",(req,res)=>{
    const kidneys=req.body.kidneys;
    if(!kidneys){   //ie if no such input       this is not required if we are using the global catch function as exception here will automatically be sent to there
        res.json({msg:"wrong inputs"})
    }

    else{const kidneylength=kidneys.length}
})

//global catches for error catching , we keep it at end after all routes
app.use(function(err,req,res,next){
    res.json({
        msg:'sorry something is up with the server'
    })
})
app.listen(3000)