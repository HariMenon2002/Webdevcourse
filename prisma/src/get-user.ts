import { PrismaClient } from "@prisma/client";
import { join } from "path";

const prisma =new PrismaClient()

async function main(){
    const users=await prisma.user.findMany({});  // inside you can put where:{email:"Harikrat@gmail.com"}
    console.log(users);
    
    // for(let i=0;i<users.length;i++){
    //     let user=users[i];
    //     console.log(user.email)
    // }


    const user=await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true      //even though this is not a part of the users table, we are able to bring it with user with the help of prisma client
            //dont think of this as a join operation, here seperate queries are being sent
        }
    })

    console.log(user)
}

main()