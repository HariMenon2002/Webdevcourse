//Right way to do routing 
//using useNavigate() hook
import { Suspense, useState} from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
//import { Dashboard } from './components/Dashboard'
const Dashboard=React.lazy(()=>import("./components/Dashboard")); //for lazy loading
import { Landing } from './components/Landing'



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <AppBar/>
        <Routes>
            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}


            <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard/></Suspense>}/> 
            <Route path="/" element={<Landing/>}/> 
        </Routes>    
      </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate=useNavigate();

  return <div>
    <button onClick={()=>{
      navigate("/");
    }}>Landing Page</button>

    <button onClick={()=>{
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>
}

export default App


//useNavigate() can be used only in a component inside BrowserRouter component
//thus we are putting the routing logic in another component called AppBar and calling it inside BrowserROuter

//In this approach, the whole code of all pages is provided to all pages which is actually not necessary.Thus we can have lazy loading wherein a page should be given the main bundle and its code only

//instead of directly importing we will do

//const Dashboard=React.lazy(()=>import("./components/Dashboard"));


//Then in Dashboard.jsx add default ie it becomes
//export default function Dashboard(){..}

//a file can have only one default function

//you should do the above things for landing as well

// When a component is being loaded dynamically, there will be a brief period where the component is not yet available. During this time, the Suspense component can display a fallback UI (like a loading spinner or message) to inform the user that the content is loading.
// User Experience: 

// Without Suspense, the application might render nothing or even break while waiting for the lazy-loaded component to be fetched. Suspense ensures a smooth user experience by showing a fallback UI until the component is ready.