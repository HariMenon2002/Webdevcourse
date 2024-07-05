//Todo application with filtering logic(todos,filter)
/*
It should have two input boxes(title,description)
A button
filter() -store it in an atom
Create a selector that gives you current set of todos
*/

//this is not complete
import { RecoilRoot, useRecoilState ,useRecoilValue, useSetRecoilState} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App(){
  
 

  return <div>
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  </div>
}

function Todo(){

  const [title,setTitle]=useState(""); //you know that title and setTitle are going to be used here only and thus we need not make it an atom
  return <div>
    <input type="text" placeholder="title" onChange={(e)=>{
        setTitle(e.target.value)}}/>
    <input type="text" placeholder="description"/>
    <button>Add todo</button>
  </div>
}

function Count(){
  
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>
}

function CountRenderer(){
  
  const count=useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function Buttons(){
  
  const setCount=useSetRecoilState(countAtom);
  console.log('re-render button')
  return <div>
    <button onClick={()=>{
     
      setCount(count=>count+1) 
    }}>Increase</button>

    <button onClick={()=>{
      
      setCount(cnt=>cnt-1)  
    }}>Decrease</button>

    <Check/>
  </div>
}

function Check(){
  const isEven=useRecoilValue(evenSelector);
  
  return <div>
    {isEven?"It is even":"It is odd"}
  </div>
}

export default App


