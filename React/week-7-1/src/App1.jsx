//Routing in react
//install react-router-dom

//create a components file so that all your components can be stored there
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>

//       <div style={{background:"black",color:"white"}}>hello there</div>
//       <BrowserRouter>
//         <Routes>
//             <Route path="/dashboard" element={<Dashboard/>}/>
//             <Route path="/" element={<Landing/>}/> 
//         </Routes>    
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App

//react is a single page application ie. a client side bundle is sent to the client by the server which includes all the js code of all the pages and thus routing is done within react without requesting the server for the particular page(html,js code) again.

//You can give the code to route wherever needed and that is called client side routing

//now i am going to make a ui which will have button and routing is based on those buttons

function App() {
  
  return (
    <div>

      <div>
        <button onClick={()=>{
          window.location.href="/"
        }}>Landing Page</button>
        <button onClick={()=>{
          window.location.href="/dashboard"
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Landing/>}/> 
        </Routes>    
      </BrowserRouter>

    </div>
  )
}

export default App


//try to type location in console, it gives an object
//location.href gives the location of the site

//but the problem with this method is that the entire html, css and js is given by server again , thus it is not what we intended to do