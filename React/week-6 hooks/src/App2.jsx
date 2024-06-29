import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    </>
  )
  //if you notice, react should ideally re render only <Header title={title}/>  as it keeps on changing and need not re render  <Header title="harikrat2"/> as it is static. But in this method, the entire thing gets re rendered
}

function Header({title}){   
  return <div>
    {title}       
  </div>
}

export default App

//click on components near to console in website.Go to settings in that and tick Highlight updates when components render option

//now when i click on the button, it highlights the areas where re renders happen in the site.Here whole of app and the div sections will be highlighted

//happens when a state variable that is being used inside a component changes or a parent component(in this case app()) re-render triggers all children (even if they dont use the state variable)re-rendering(all the other Headers)

