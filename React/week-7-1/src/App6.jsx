//State management using recoil

//whole project can be divided into states and components
//State management is a cleaner way to store state of your app
//Recoil is a state management library for react

//This concept can reduce the re renders which were prominent in context api

//no context logic and state variable should be here

import { RecoilRoot, useRecoilState ,useRecoilValue, useSetRecoilState} from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";

function App(){
  
  //here we have to wrap it with RecoilRoot
  //wherever you have to use atom logic ,we have to wrap it with recoil root

  return <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  </div>
}

function Count(){
  //it is also okay to put return <div> <RecoilRoot>... </RecoilRoot>here as Count() doesnt use any recoil logic
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>
}

function CountRenderer(){
  //here i just need the value and need not update so i can use 
  const count=useRecoilValue(countAtom);

  //if i need both i will just do
  //const [count,setCount]=useRecoilState(countAtom)
  return <div>
    {count}
  </div>
}

function Buttons(){
  //here i need both value and update
  //const [count,setCount]=useRecoilState(countAtom);

  //but actually when you think about it ,you dont need the count value here,you just need the updation .The problem when you do above is that, Buttons() also gets re rendered which is unnecessary

  const setCount=useSetRecoilState(countAtom);
  console.log('re-render button')
  return <div>
    <button onClick={()=>{
      //setCount(count+1)       //this can be used only if i define count here as in the first approach
      setCount(count=>count+1) //here parameter in setCount should be given like this as it now just symbolises a function and not the actual state variable count
    }}>Increase</button>

    <button onClick={()=>{
      //setCount(count-1)
      setCount(cnt=>cnt-1)  
    }}>Decrease</button>

    <Check/>
  </div>
}

function Check(){
  const val=useRecoilValue(countAtom);
  // if(val%2==0){
  //   return <div>
  //     It is even
  //   </div>
  // }
  // else return <div>
  //   It is odd
  // </div>
 
//   return <div>                                 another approach
//     {(val%2==0)?"It is even":"It is odd"}
//   </div>

  //optimised approach
  const isEven=useMemo(()=>{
    return val%2==0
  },[val])

  return <div>
    {isEven?"It is even":"It is odd"}
  </div>
}

export default App


//first do npm install recoil

//In src, create a store folder and in that create another folder called atoms. In that create a count.jsx file

/*
Recoil has the concept of an atom to store the state. An atom is the smallest unit of state. An atom can be defined outside the component. It can be teleported to any component.

An atom is similar to useState Hook ie it can be used to define a state varible
An atom which is defined in another folder having state variables  can be given to specific components and the beauty is that only those components will rerender.

Things to learn=
1.RecoilRoot
2.atom
3.useRecoilState- works just like useState,ie it gives value and how to update   variable (setState fn)
4.useRecoilValue- you can use this if you just want the value
5.useSetRecoilState- if you only want to update variable
6.selector


Another thing to note is that just because we are using recoil, we should completely abandon useState() logic. Recoil is generally used when I need a global state variable which is used by more components
*/