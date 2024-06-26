const {createTodo}=require("")
const express=require("express");
const { updateTodo } = require("./types");
const app=express();

app.use(express.json());

//i am expecting body {title:String,description:String}
app.post("/todo",function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
})

app.get("/todos",function(req,res){

})

//i am expecting body {id:String}
app.put("/completed",function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

})