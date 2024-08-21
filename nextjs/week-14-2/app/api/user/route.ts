import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";
import client from "@/db"
// you can also do import client from "../../../db"
//const client = new PrismaClient();

export async function GET() {  //we can access it in localhost:3000/api/user  
    
    const user=await client.user.findFirst(); //just to get first user to check
    return Response.json({ username: user?.username, email: "harkirat@gmail.com" })
}

//ie if we want a get handler, we have to export a function called GET
//this is equivalent to app.get("/api/user",(req,res)=>{res.json({username...})})

/*
export async function POST(req:NextRequest){

    const body=await req.json();    
    console.log(body);

    return Response.json({ message:"you are logged in"})
}
*/

export async function POST(req:NextRequest){

    const body=await req.json();

    //header
    console.log(req.headers.get('authorization'));

    //query parameter
    console.log(req.nextUrl.searchParams.get("name"));

    try{
        await client.user.create({
            data:{
                username:body.username,
                password:body.password
            }
        })    
        console.log(body);

        return Response.json({ message:"you are logged in"})
    }catch(e){
        return Response.json({
            message:"error"
        })
    }
}


/*
Many users have come across this warning while working with Next.js in development:

warn(prisma-client) There are already 10 instances of Prisma Client actively running.

There's a related discussion and issue for the same.

In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.

The solution in this case is to instantiate a single instance PrismaClient and save it on the 
globalThis
 object. Then we keep a check to only instantiate PrismaClient if it's not on the globalThis object otherwise use the same instance again if already present to prevent instantiating extra PrismaClient instances.

 This is done in db.ts 

 thus here we should include 
 import client from "@/db"  and remove our normal client initialisation
*/