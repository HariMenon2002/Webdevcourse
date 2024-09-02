import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler=NextAuth({
    providers:[
        //we will be using credential provider here 
        Credentials({
            name:"username and pass",
            credentials:{
                username:{label:'email',type:'text',placeholder:'Email'},
                password:{label:'password',type:'password',placeholder:'Password'},
            },

            //authorize function tells us what to do after user clicks on sign in
            async authorize(credentials:any){
                const username=credentials.username;
                const password=credentials.password;

                /*
                now you can do something like
                const user=await prisma.user.findOne({
                    where:{
                        email:username,
                        password:password
                    }
                })
                
                if(!user) return null;
                return {
                    id: user.id,
                    email: user.email
                }
                */
                return {
                    id:"user1",
                    name:"Hari",
                    email:"harkirat@gmail.com"
                };
            },

        })
    ],

    secret: process.env.NEXTAUTH_SECRET 

})

export const GET=handler;
export const POST=handler;
//any get or post req that starts with api/auth/anything will be handled by nextauth library 

//if i do localhost:3000/api/auth/signin I will be taken to signin page

//NOTE: nextauth does not give a signup page, that you will have to create on your own

//once you sign in nextauth will automatically set a cookie as well