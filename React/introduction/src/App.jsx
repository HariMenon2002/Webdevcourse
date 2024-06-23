import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  //in this count is actually a state variable(any variable that react needs to consciously watch)
  //any time value of count changes ie by calling setCount
  const [count2,setCount2]=useState(0)
  return (
    <div>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCount2(Math.random())}> 
          count is {count2}
        </button>
        
    </div>
  )
}

export default App


//First create a folder and navigate to it.Do npm create vite@latest
//It will ask for a project name(in this case INTRODUCTION), a framework(React) and variant(Javascript)

//navigate to the project and open it

//remove most of the html body in app.jsx and you can put whatever you want.Put div in the first tag which is empty

//now do npm install, and then npm run dev

//Function in jsx file can return html as it is a combination of js and html
//you can empty app.css and index.css file if you want to

//all dom related stuff is managed by react itself which makes it much simpler