//Side effects

//in react the concept of side effects encompasses any operations that reach outside the functional scope of a react component ie anything unrealted to rendering. These operations can affect other components,interact with the browser or perform asynchronous data fetching

//eg fetch,setTimeOut etc.

//Hooks 

//Some common hooks are useState,useEffect,useCallback,useMemo,useRef,useContext

//useState lets you describe the state of your application.Whenever state updates,it triggers a re render which final results in dom update 

//useEffect allows you to perform side effects(like backend calls) in function components

//some examples using useEffect


import { useState,useEffect} from 'react'
import React,{Fragment} from 'react';




// function App() {

//   const [todos,setTodos]=useState([]);

//   useEffect(function(){       
//     fetch("https://sum-server.100xdevs.com/todos").then(async function(res){
      
//       const json=await res.json();
//       setTodos(json.todos);
//     })
//   },[])

  
//   return (<div>
//      {todos.map((todo)=> <Todo title={todo.title} description={todo.description}></Todo> )}
//   </div>)
// }

// function Todo(props){

//   return (<div>
//     <h2>{props.title}</h2>
//     <h2>{props.description}</h2>
//   </div>)

// }

// export default App  


/*
Write a component that takes a todo id as an input and fetches the data for that todo from the given endpoint and then renders it.How would the dependency array change.You will have 4 buttons on the screen and according to that, that id will be sent
eg "https://sum-server.100xdevs.com/todo?id=1"
*/

function App(){
  const [clicker,setClicker]=useState(1)
  
  return <div>
    <button onClick={function(){        
      setClicker(1);
    }}>1</button>
    <button onClick={function(){
      setClicker(2);
    }}>2</button><button onClick={function(){
      setClicker(3);
    }}>3</button>
    <button onClick={function(){
      setClicker(4);
    }}>4</button>



    <Todo id={clicker}/>
  </div>
}


function Todo({id}){

  const [todo,setTodo]=useState({}); //here it is an object as that endpoint also gives an object instead of an array

  useEffect(function(){  //outer func of useEffect cant be async
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async function    (res){
      const json=await res.json();
      setTodo(json.todo)
      })
    },[id])   //ie call function again when id changes
  //if i just put [], it will remain the same even on clicking other buttons as the function inside useEffect will not be called after rendering one time
  return (<div>
    id:{id}
    <h2>{todo.title}</h2>
    <h2>{todo.description}</h2>
  </div>)

}
export default App

//if you are using axios library, first install it
//then do import axios from "axios"

/*
useEffect(()=>{
  axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response=>{
      setTodo(response.data.todo)
    })
})
*/