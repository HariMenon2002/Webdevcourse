//Asynchronous data queries

//I am now trying to build a real linkedin bar by hitting the backend
//https://sum-server.100xdevs.com/notifications
//The above site gives {"network":5,"jobs":9,"messaging":2,"notifications":6} format

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App

/*
But this is not the actual way to do asynchronous queries. If you notice you will see that everytime you refresh the website it will show the default values first and then only it shows the real values.

axios.get() should actually reside in the default of notifications instead of here,but you cant directly do that

The default value for an atom needs to be synchronous or it can be a selector which can be asynchronous. So we will use high level selectors to incorporate asynchronous data into the recoil data flow
*/

