const {todo}=require("./db")
const express=require("express");
const { createTodo,updateTodo } = require("./types");  
const app=express();

app.use(express.json());

//i am expecting body {title:String,description:String}
app.post("/todos",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    //put it in mongodb 
    await todo.create({                 //you should wait for todo to be created and then only inform the user
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    });
    res.json({msg:"todo created"});
})

app.get("/todos",async function(req,res){
    //const todos=await todo.find({title:"go to gym"})
    const todos=await todo.find({});   //my db might be in america, so in this case as well you should wait 

    //console.log(todos)//promise
    res.json({
        todos
    })
})

//i am expecting body {id:String}
app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id:req.body.id    //i want to update the object with this id
    },{
        completed:true
    });

    res.json({
        msg:"todo has been completed"
    })

})

app.listen(3000);