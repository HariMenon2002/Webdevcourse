import { useState } from "react";
//const a=10;
// let state={        React will not care about this, as it doesnt consider this as a state variable
//   count:0          //this is the reason why we use useState hook
// }

function App() {
  const [count,setCount]=useState(0);  //0 will be initial value of count

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>  
      <CustomButton count={count+100} setCount={setCount}></CustomButton>  
      {/* The count and setCount will be the parameters that go to the props */}
    </div>
  )
}


function CustomButton(props){  //another component
//it is better to make these components externally instead of putting all of them in App()
    function onClickHandler(){
      props.setCount(props.count+1);
    }
    return <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
}

export default App

//to get javascript variable inside a react component , you should use {}

//this is xml used here and not html so syntax can vary, for eg you cant use
// <button onclick="hari()"> 


