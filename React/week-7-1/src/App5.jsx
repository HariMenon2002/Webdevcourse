
//Context API part 2

//suppose i am putting both  count and setCount in the context

import { useContext, useState } from "react";
import { CountContext } from "./context";

function App(){
  const [count,setCount]=useState(0); 

  return <div>
    <CountContext.Provider value={{count,setCount}}>  {/*we are passing the state variable to be teleported */}
      <Count />
    </CountContext.Provider>
  </div>
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>
}

function CountRenderer(){

  const {count}=useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons(){

  const {count,setCount}=useContext(CountContext);

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

/*
Context api is used to make syntax cleaner and get rid of prop drilling. It does not reduce the number of times the child components rerender.For eg here Count fn will rerender even if count is not used here
 */