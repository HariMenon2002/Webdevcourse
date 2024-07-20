//custom hooks
//It is a function which uses another hook internally and must start with use
//one eg. is the data fetching hook
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function useTodos(){
  const [todos,setTodos]=useState([])
  const [loading,setLoading]=useState(true)
  const [load,setLoad]=useState(0)
  
  
  useEffect(()=>{
    
    axios.get("https://sum-server.100xdevs.com/todos")  //i can put this inside setInterval if i need to fetch after every n seconds interval
      .then(res=>{
        setTodos(res.data.todos);
        setLoading(false)     
      })
  },[])

/*Suppose if it was useTodos(n) ie useTodos accepts n number of seconds after which backend to be polled as parameter
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)                        


    return () => {                //ie if value of n is changed, the prev interval should be removed
      clearInterval(value)
    }
  }, [n])
  */

  return {todos,loading}
}
function App() {
  const {todos,loading} = useTodos();
  
 
  if(loading){
    return <div>loading</div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App

/*
Data fetching hooks are used to encapsulate all the logic to fetch the data from your backend 
First install axios
*/