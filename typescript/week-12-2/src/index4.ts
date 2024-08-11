//Type inference in zod

//first do npm install express @types/express zod
import {z} from "zod";
import express from "express";

const app=express();

const userProfileSchema=z.object({
    name:z.string().min(1,{message:"name cant be empty"}), //min length 1
    email:z.string().email({message:"invalid email format"}),
    age:z.number().min(18,{message:"you must be atleast 18"}).optional(),
})

type FinalUser={
    name:string,
    email:string,
    age?:number;
}

//instead of manually doing like above you can do
type FinalUser2=z.infer<typeof userProfileSchema>

app.put("/user",(req,res)=>{
    const {success}=userProfileSchema.safeParse(req.body);
    const updateBody:FinalUser=req.body;

    if(!success){
        res.status(411).json({});
        return 
    }

    res.json({
        message:"user updated"
    })
});

app.listen(3000)