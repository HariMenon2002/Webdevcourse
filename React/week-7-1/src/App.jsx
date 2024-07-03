//State management using recoil

//whole project can be divided into states and components
//State management is a cleaner way to store state of your app
//Recoil is a state management library for react

//This concept can reduce the re renders which were prominent in context api

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


//first do npm install recoil

//In src, create a store folder and in that create another folder called atoms. In that create a count.jsx file

/*
Recoil has the concept of an atom to store the state. An atom is the smallest unit of state. An atom can be defined outside the component. It can be teleported to any component.

An atom is similar to useState Hook ie it can be used to define a state varible
An atom which is defined in another folder having state variables  can be given to specific components and the beauty is that only those components will rerender.



*/