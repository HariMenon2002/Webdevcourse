import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos]=useState([]);
  
  fetch("http://localhost:3000/todos")  
    .then(async function(res) {             //res is a json containing todos which is an array of objects
      const json = await res.json();
      setTodos(json.todos);
    })  
  
  
  //problem is when setTodos is called function re renders, thus fetch will be called multiple times.This is where we use useEffect hook    
  
  return (
    <div>
      
      <CreateTodo></CreateTodo>

      {/* <Todos todos={[
        {
          title:"asd",
          description:"dddd",
          completed:false
        }
      ]}></Todos> */}

      <Todos todos={todos}></Todos>



    </div>
  )
}

export default App

//all my frontend components i am going to put it in a folder in src called components
