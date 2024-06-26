import { useState } from "react";

export function CreateTodo(){  //export is needed to import it in the other file
    
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}/><br/>

        <input style={{
            padding:10,
            margin:10
        }}type="text" placeholder="description" onChange={function(e){
            const value=e.target.value; //e.target is that dom
            setDescription(value);
        }}/><br/> 

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({ //we have to stringify as this is how fetch works
                    title:title,      //dont use document.getid even if it is possible here as it destroys the whole point of react
                    description:description// thus we will use local state variables(you can also use react query)
                }),

                headers:{
                    "Content-Type":"application/json"
                }  //we have to do this because this is how fetch works
            })
            .then(async function(res){
                const json=await res.json();
                alert("todo added");
            })
        }}>Add a todo</button>
    </div>
}

//you can also do module.exports as well if you want instead of export