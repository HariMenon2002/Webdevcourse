import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);  

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


