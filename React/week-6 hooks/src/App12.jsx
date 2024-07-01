//useRef
//gives access to dom elements

//you want to override what react has done


import { memo,useState,useEffect,useMemo, useCallback} from 'react'
import React,{Fragment} from 'react';


function App(){
  const divRef=useRef();  //used to get ref to dom elements

  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current); //this is how you access it
      divRef.current.innerHTML="10"    //you are trying to change that 20000 into 10 by overriding it
    },5000)
  },[])

  const incomeTax=20000;  //suppose this is what react has calculated
  

  return <div>
    hi there, your tax returns are <div ref={divRef}>{incomeTax}</div> 
  </div>
}



export default App

