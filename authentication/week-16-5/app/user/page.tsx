import { getServerSession } from "next-auth"


export default async function(){
    const session=await getServerSession();
    return <div>
        Server component
        {JSON.stringify(session)}
    </div>
}