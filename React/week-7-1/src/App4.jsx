
//Context API

/*
It helps in fixing props drilling.
It helps in teleporting state variables

First create a file , you can call it context.jsx

Wrap anyone that wants to use the teleported value  inside a provider
Now you can use useContext
*/

//suppose i am putting only count variable in the context

import { useContext, useState } from "react";
import { CountContext } from "./context";

function App(){
  const [count,setCount]=useState(0); 

  return <div>
    <CountContext.Provider value={count}>  {/*we are passing the state variable to be teleported */}
      <Count setCount={setCount}/>
    </CountContext.Provider>
  </div>
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer(){

  const count=useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){

  const count=useContext(CountContext);

  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App