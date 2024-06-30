//Hooks
//The functions that start with use are called hooks. It allows you to hook into react state and lifecycle features from function components


import { useState,useEffect} from 'react'
import React,{Fragment} from 'react';



function App() {

  useEffect(function(){       //this will run only once and that is when it is mounted, ie even if whole component is re rendered again, it will not be called
    alert("hi")
  },[])

  //[] is the dependent array, if it is empty it means the function should run on mount

  //suppose i had a state variable counter and i put it inside dependent array ie.[counter], any time counter changes, this function will be called

  //eg if return <div>
    //        <button onClick={()=>{
    //             setCounter(counter++)
   //         }}>increase count</button>
         


  return <div>
     hi there
  </div>
}

export default App  


//the below way is the actual way to do the todo app


// const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//       .then(async (res) => {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, [])

//   return (
//     <div>
//       {todos.map(({title, description}) => <Todo title={title} description={description} />)}
//     </div>
//   )



