//useMemo
/* If i ask you to create an app that does two things
1.Increase a counter by 1
2.Lets user put a value in an input box (n) and you need to show sum from 1-n
*/


import { useState,useEffect} from 'react'
import React,{Fragment} from 'react';





function App(){
  const [clicker,setClicker]=useState(1)
  
  return <div>
    <button onClick={function(){        
      setClicker(1);
    }}>1</button>
    <button onClick={function(){
      setClicker(2);
    }}>2</button><button onClick={function(){
      setClicker(3);
    }}>3</button>
    <button onClick={function(){
      setClicker(4);
    }}>4</button>



    <Todo id={clicker}/>
  </div>
}


function Todo({id}){

  const [todo,setTodo]=useState({}); //here it is an object as that endpoint also gives an object instead of an array

  useEffect(function(){  //outer func of useEffect cant be async
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async function    (res){
      const json=await res.json();
      setTodo(json.todo)
      })
    },[id])   //ie call function again when id changes
  //if i just put [], it will remain the same even on clicking other buttons as the function inside useEffect will not be called after rendering one time
  return (<div>
    id:{id}
    <h2>{todo.title}</h2>
    <h2>{todo.description}</h2>
  </div>)

}
export default App

