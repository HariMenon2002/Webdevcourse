//Custom Hooks
//you can write your own hooks, only condition is that it should start with use


import { memo,useState,useEffect,useMemo, useCallback} from 'react'
import React,{Fragment} from 'react';

function useTodos(){
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    fetch("").then(async (res)=>{
        const json=await res.json();
        setTodos(json.todos)
    })
  },[])

  return todos;
}

function App(){
  const todos=useTodos();
  

  return <div>
    {todos}
  </div>
}

const ButtonComponent=memo(function({inputFunction}){  
  console.log("child render");
  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})



export default App

