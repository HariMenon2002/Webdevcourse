//Keys in react

//First let us create a todo application
import { useState } from 'react'
import React,{Fragment} from 'react';
var globalId=4;

function App() {
  const [todo, setTodo] = useState([{
    id:1,
    title:"hari",
    description:"good boy"
  },{
    id:2,
    title:"Alan",
    description:"naughty"
  },{
    id:3,
    title:"Shino",
    description:"sigma"
  }]);

  function updateTodo(){
    setTodo([...todo,{id:globalId++,title:Math.random(),description:Math.random()}]);
  }
  return (
    <>                           
       <button onClick={updateTodo}>Add Todo</button>
       {todo.map(tod=> <Todo title={tod.title} description={tod.description}/>)}   
      
    </>
  )
}

function Todo(props){    //you can also give {title,description} here 

  return <div>
    <h1>title:{props.title}</h1>
    <h5>description:{props.description}</h5>

  </div>
}




export default App  



//when you do the above program you will see a keys error in the console even though the app renders

//you need to give each array item a key-a string or a number that uniquely identifies it among other items in that array. Key tells react which array item each component corresponds to so that it can match up later. This becomes important if your array items can move(eg during sorting), get inserted or deleted. Rather than generating keys on the fly , you should include them in your data.

//thus we have to add id in 
//{todo.map(tod=> <Todo key={todo.id} title={tod.title} description={tod.description}/>)}   

