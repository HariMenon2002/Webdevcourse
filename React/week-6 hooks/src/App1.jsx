import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>                           
     {/* it is okay even if i dont put div above as it just needs some parent*/}
     {/* thus it avoids an extra dom element */}
      <Header title="harikrat1"/>
      <Header title="harikrat2"/>
    </>
  )
}

function Header({title}){   //this is object destructuring, you can also take in props here and then do props.title
  return <div>
    {title}       
  </div>
}

export default App

//create a react app that has a header component that takes title as a prop and renders it inside a div. The top level app component renders two headers

//A component can return only a single child eg a div .This is because it is easier to do reconciliation(how the dom updates)

//go to google and install react dev tools