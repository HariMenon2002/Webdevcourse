import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />


        <InputBox onChange={e=>{
          setFirstName(e.target.value);
        }}placeholder="John" label={"First Name"} />

        <InputBox onChange={e=>{
          setLastName(e.target.value)
        }}placeholder="Doe" label={"Last Name"} />

        <InputBox onChange={e=>{
          setUsername(e.target.value)
        }}placeholder="harkirat@gmail.com" label={"Email"} />

        <InputBox onChange={e=>{
          setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />


        <div className="pt-4">
          <Button onClick={async()=>{
              const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,firstName,lastName,password   //you dont have to do eg username:username etc as they are same name
              });
              localStorage.setItem("token",response.data.token) //here "token" is just a key, you can give any name for it

              navigate("/dashboard")   //ie i am going to dashboard after signing in  
          }} label={"Sign up"} />
        </div>


        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}

/*i will also install axios in the frontend 
After signup, when i get back a token from the server, i am going to store it in local storage as i did above
In browser, go to application and then local storage

Usually in sites,when you logout, the token also gets removed by localStorage.removeItem("token")
*/