import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {                    //you can give any function name and also give it parameters
  // ... you will write your Prisma Client queries here
  //prisma client already knows your schema
  await prisma.user.create({
    data:{
        email:"harikrat@gmail.com",
        name:"Harikrat",

    }
  })

  //you can also try to do const response=await prisma ..... and do console.log(response)
}

// main()
//   .then(async () => {
//     console.log("done with the query")
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

main()