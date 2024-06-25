import { useState } from "react";
//const a=10;
// let state={        React will not care about this, as it doesnt consider this as a state variable
//   count:0          //this is the reason why we use useState hook
// }

function App() {
  const [count,setCount]=useState(0);  //0 will be initial value of count
  console.log(count);
  console.log(setCount);  

  function onClickHandler(){
    // state.count=state.count+1;
    //console.log(state.count)

    //you cant directly do count=count+1
    setCount(count+1);  
    
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {count} </button>  
    </div>
  )
}



export default App

//a simple counter app
//to get javascript variable inside a react component , you should use {}

//this is xml used here and not html so syntax can vary, for eg you cant use
// <button onclick="hari()"> 


