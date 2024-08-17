import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function getPosts(userId:number){  //gives posts of a user
    const response=await prisma.post.findMany({
        where:{
            authorId:userId
        }
    })

    console.log(response);  
}

getPosts(1);

async function getPostsAndUserDetails(userId:number){  //gives posts and user details
    
    /*
    await prisma.post.create({
        data:{
            title:'Learn Prisma',
            content:"prisma",
            published:true,
            authorId:1
        }
    })
    */
    
    
    /*
    const response=await prisma.post.findMany({
        where:{
            authorId:userId
        }
    })
    const details=await prisma.user.findUnique({
        where:{
            id:userId
        }
    })

    this is not the ideal approach
    */

    const response=await prisma.post.findMany({
        where:{
            authorId:userId
        },
        select:{
            id:true,
            title:true,
            published:true,
            author:true
        } //gives id, title, published values and all author details
    })
    console.log(response);  
}