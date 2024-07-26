import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

async function main(){
    await prisma.post.create({
        data:{
            title:"title of post",
            content:"adsd",
            published:true,
            author:{                //you can also directly give authorId:1
                connect:{
                    id:1        //means this is for user 1
                }
            }
        }
    })
}

main()