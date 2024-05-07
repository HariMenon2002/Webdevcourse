//zod is used for input validation

const zod=require("zod")
const express=require("express")
const app=express();

const schema=zod.array(zod.number());  //i am saying my schema should be an array of numbers, as kidneys are an array of numbers
//similary you can validate string by doing zod.string(), validate object by zod.object() etc.

app.use(express.json());

app.post("/health-checkup",function(req,res){

    //kidneys should be an array of numbers
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys) //validating my input
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{res.send({response})}
});


//suppose i need input in this format
//{
//   email:string->email
//   password: atleast 8 characters
//   country: in or us
//}

function validateInput(obj){
    const schema1=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
        country:zod.literal("IN").or(zod.literal("US"))  //ie it can be in or us
    })
    const response1=schema1.safeParse(obj);
    console.log(response1)
}

validateInput(["1",2,3]); //gives success:false
validateInput({
    email:"hari@gmail.com",
    password:"12345678",
    country:"IN"
})

//you can also do

function validate(obj){
    const schema1=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
    })
    const response=schema1.safeParse(obj);
    return response;
}

app.post("/login",(req,res)=>{
    const response=validate(req.body)
    if(!response.success){
        res.json({msg:"your inputs are invalid"});
        return;
    }
})


app.listen(3000)

//check zod documentation for more