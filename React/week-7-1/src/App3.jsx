//Prop drilling

//suppose i can call Buttons only in Count function
import { useContext, useState } from "react";

function App(){
  const [count,setCount]=useState(0); 

  return <div>
    <Count count={count} setCount={setCount}/>
    {/*if I had called Buttons here, then count wouldnt have had to send this setCount , but it is specifically mentioned in the question that i cant call Buttons here */}
  </div>
}

function Count({count,setCount}){
  return <div>
    <CountRenderer count={count}/>
    <Buttons count={count} setCount={setCount}/>
  </div>
}

function CountRenderer({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){

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

//in above code, even thought Count function does not need setCount, it still has to accept it as Buttons function requires it

//it also has to accept count as CountRenderer needs it

//this is a bad approach
//This is called props drilling as you are passing on props just because one of the components needs it. This just represents syntactic uneasiness


