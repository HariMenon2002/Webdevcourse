import { NextRequest } from "next/server";


export async function GET() {  //we can access it in localhost:3000/api/user    
    return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
  }

//ie if we want a get handler, we have to export a function called GET
//this is equivalent to app.get("/api/user",(req,res)=>{res.json({username...})})

export async function POST(req:NextRequest){

    const body=await req.json();    
    console.log(body);

    return Response.json({ message:"you are logged in"})
}