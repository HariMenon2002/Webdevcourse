//Assignment


import { memo,useState,useEffect,useMemo, useCallback} from 'react'
import React,{Fragment} from 'react';



function App(){
  
  const [count,setCount]=useState(0);

  function log(){
    console.log("child clicked")
  }

  return <div>
    <ButtonComponent inputFunction={log}></ButtonComponent>
    <button onClick={()=>{
        setCount(count+1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent=memo(function({inputFunction}){  
  console.log("child render");
  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})



export default App

