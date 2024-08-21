"use server"

import client from "@/db";

export async function signup(username:string,password:string){
    try{
        await client.user.create({
            data:{
                username:username,
                password:password
            }
        });
        return true
    } catch(e){
        return false;
    }
}

/*
instead of creating a seperate route for server action like fetching data, this is something which you can do 
Here we have to specify it is a server component as it might get called in client component as well */