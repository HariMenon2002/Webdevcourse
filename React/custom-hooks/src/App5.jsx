//Create a hook that debounces a value 
//value which needs to be debounced and interval at which value is to be debounced is given
import { useEffect, useState } from 'react'

const useDebounce = (input, delay) => {
  const [debouncedValue,setDebouncedValue]=useState(input)
  useEffect(() => {
    let delayId = setTimeout(()=>{setDebouncedValue(input)}, delay);

    return () => clearInterval(delayId);
  },[input]);

  return debouncedValue 
};


function App() {
  const [input, setInput] = useState("");
  const debouncedValue=useDebounce(input,500)  //500 ms debounce delay ie. if i type a and rest irpods,then backend request will go for only a and airpods and not a,ai ,air ..etc.

  // useEffect(()=>{            this should be done for backend call
  //   fetch(..)
  // },[debouncedValue])

  return (
    <>
      Debounced value is {debouncedValue}
      <input
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder='Search..'
      />
    </>
  )
}

export default App

/*
*/