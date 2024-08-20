import axios from "axios";

async function getUserDetails(){

  //await new Promise((r)=>setTimeout(r,5000))     //for artificial delay
  
  const response=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  //after doing backend , you can put axios.get("http://localhost:3000/api/user")
  //but if you think about it, when you do this you are actually sending data from nextjs server back to nextjs server  
  return response.data
}

//async component
export default async function Home() {
  const userData=await getUserDetails();

  return (
    <div>
      hi there
      {userData.email}
      {userData.name}
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
    </div>
  );
}


/*
There is no concept of async components in react. It was introduced in nextjs recently but only for server components
 */