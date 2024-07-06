import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue ,useRecoilState} from 'recoil'
import { networkAtom,jobsAtom,notificationsAtom,messagingAtom, totalNotificationsSelector } from './atoms'

//suppose i am trying to make a linkedin topbar
function App() {
  //if i were not using recoil, i would need 4 state variables to update My network,Jobs, Messaging and Notifications (ie show current no of jobs etc)
  
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationsAtomCount=useRecoilValue(notificationsAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
  
  //total using useMemo
  const total=useMemo(()=> {
    return networkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
  },[networkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount]);
  
  //total using selectors
  const totalNotificationsCount=useRecoilValue(totalNotificationsSelector)
  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>    
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>
      <button onClick={()=>{
        setMessagingAtomCount(messagingAtomCount+1);
      }}>Add</button>
      
      {/* <button>Me ({total})</button> */}
      <button>Me ({totalNotificationsCount})</button>

    </>
  )
}
export default App
