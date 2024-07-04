//Selector

//It is like useMemo , ie it can be used when something is derived from a bunch of dependencies, for eg here const isEven depends on the variable val
import { RecoilRoot, useRecoilState ,useRecoilValue, useSetRecoilState} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App(){
  return <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
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


