//Create a hook that returns true or false based on whether user is currently online
//window.navigator.onLine returns true or false 
//you can attach event listeners to listen whether user is offline or not
import { useEffect, useState } from 'react'

import './App.css'


function useIsOnline(){
  const [check,setCheck]=useState(window.navigator.onLine)
  
  useEffect(()=>{
      window.addEventListener("online",()=>{  
        setCheck(true);
      })
      window.addEventListener("offline",()=>{
        setCheck(false);
      })

      //actually when need to remove the prev events as well as it unmounts
  },[])

  return check
}
function App() {
  const check = useIsOnline();
  
  if(check){
    return <div>User is online</div>
  }

  return (
    <div>User is offline</div>
  )
}


export default App

/*
*/