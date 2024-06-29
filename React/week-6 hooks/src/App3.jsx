//A solution to the prev problem is to put state variable in another function

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  
//   return (
//     <>                           
       
//       <HeaderWithButton/>    
//       <Header title="harikrat2"/>
//     </>
//   )
  
// }

// function HeaderWithButton(){
//   const [title, setTitle] = useState("My name is Hari")

//   function updateTitle(){
//     setTitle("My name is "+Math.random());
//   }
  
//   return <>
//     <button onClick={updateTitle}>click to change title</button>
//     <Header title={title}></Header>
//   </>
// }

// function Header({title}){   
//   return <div>
//     {title}       
//   </div>
// }

// export default App



//Another solution is to use React.memo
//memo lets you skip re rendering a component when its props are changed
import { useState } from 'react'
import React,{Fragment} from 'react';
function App() {
  const [title, setTitle] = useState("My name is Hari")

  function updateTitle(){
    setTitle("My name is "+Math.random());
  }

  return (
    <>                           
       <button onClick={updateTitle}>change the title</button>
      <Header title={title}/>    
      <Header title="harikrat2"/>
      <Header title="harikrat2"/>
      <Header title="harikrat2"/>
      <Header title="harikrat2"/>
      <Header title="harikrat2"/>
      <Header title="harikrat2"></Header>
    </>
  )
}



const Header=React.memo(function ({title}){   //now Header will not be re rendered unless it has a dynamic variable which changes based on state
                                            //ie .app() will re render but the individual Headers will not
  return <div>
    {title}       
  </div>
})
export default App  



