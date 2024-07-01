//useCallback


import { memo,useState,useEffect,useMemo, useCallback} from 'react'
import React,{Fragment} from 'react';



function App(){
  
  const [counter,setCounter]=useState(0);

  // function a(){    //in this case when the counter value changes and app gets rerendered, Demo will also re render even if we use memo function and a has no change in body, because each time function declaration points to diff memory

  //   //this is why we use useCallback
  //   console.log("hi there")
  // }
  
  const a=useCallback(function(){
    console.log("hi there")
  },[])
  return <div>
    <button onClick={()=>{
       setCounter(counter+1)
    }}>Counter ({counter})
    </button>

    <Demo a={a} />   
  </div>
}

const Demo=memo(function({a}){  //this will re render if we dont use useCallback as each time address of a might change and it will consider it as change in a
  console.log("rerender");
  return <div>
    hi there {a}
  </div>
})



export default App

