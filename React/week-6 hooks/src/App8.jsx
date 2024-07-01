//useMemo
/* If i ask you to create an app that does two things
1.Increase a counter by 1
2.Lets user put a value in an input box (n) and you need to show sum from 1-n
3.Everything has to be inside app()
*/


import { useState,useEffect,useMemo} from 'react'
import React,{Fragment} from 'react';



function App(){
  const [inputValue,setInputValue]=useState(1);
  const [counter,setCounter]=useState(0);

  // let count=0;                 
  // for(let i=1;i<=inputValue;i++){  //problem here is that when app is re-rendered When counter is changed, this loop will run again unnecessarily 
  //   count=count+i;  
  // }
  
  //but if i had stored the previous result(memoization) it would be better

  //one solution is to  take another state variable and put above logic in a useEffect() 
  
  /*
  const [finalValue,setFinalValue]=useState(0)
  useEffect(()=>{
  let count=0;                 
  for(let i=1;i<=inputValue;i++){  
    count=count+i;  
  }
  setFinalValue(count);
  },[inputValue]);
  /*
  and then

  Sum from 1 to {inputValue} is {finalValue}

  */

  //best solution 

  let count1=useMemo(()=>{  //here no need to use another state variable 
    let finalcount=0;
    for(let i=1;i<=inputValue;i++){
      finalcount=finalcount+i;
    }
    return finalcount;
    },[inputValue]);   //this will run only when inputValue changes


  return <div>

    <input onChange={function(e){
        setInputValue(e.target.value);
    }} placeholder='find sum from 1 to n'></input>
    <br />
    Sum from 1 to {inputValue} is {count1}
    <br />
   <button onClick={function(){
          setCounter(counter+1);
      }}>
        Counter {counter}
   </button>
  </div>
}



export default App

