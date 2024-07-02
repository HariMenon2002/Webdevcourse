
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