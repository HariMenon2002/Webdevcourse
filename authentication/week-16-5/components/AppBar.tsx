/*If i need an appbar to sign in and sign out i can do */
/*
"use client";
import { useRouter } from "next/navigation"

export function AppBar(){
    const router= useRouter();
    return <div>
        <button onClick={()=>{
            router.push("/api/auth/signin")
        }}>Signin</button>
    </div>
}
*/

/*There is also another approach*/
"use client";
import { signIn,signOut, useSession} from "next-auth/react";  //this is provided by nextauth

export function AppBar(){
    
    const session=useSession();  
    return <div>
        <button onClick={()=>{
           signIn();
        }}>Signin</button> <br/>
        <button onClick={()=>{
           signOut();
        }}>Signout</button>

      {JSON.stringify(session)}  {/*this shows what nextauth returns */}
    </div>
}