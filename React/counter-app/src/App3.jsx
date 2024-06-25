import { useState } from "react";

//todo application using react
// {
//   todos:[{title:"todo1",description:"First todo",completed:false}]
// }      
//the above should be my state , here my state is in form of an array
function App() {
  const [todos,setTodos]=useState([{  //another thing to note is that i declare state variables inside functions as well
    title:"Go to gym",
    description:"Go to gym from 7-8",
    completed:false
    },{
    title:"Study DSA",
    description:"Study dsa from 9-10",
    completed:true
  }]);  

  function addTodo() {
    setTodos([...todos,{          //...todos spreads all value of todos
      title:"new todo",
      description:"desc of new todo"
    }])
  }

  return (
    <div>
      {/* doing only {JSON.stringify(todos)} will work but it is very unclean */}
      {/* <Todo title="harkirat" description="harkirat2"></Todo> */}
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {/* //it is better to use a for loop */}

      <button style={{border:10}} onClick={addTodo}>Add a remote todo</button> 

      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}

      <DummyButton></DummyButton>
    </div>
  )
}


function Todo(props){ 

    return <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      
    </div>
}

function DummyButton(){  //this is just to show that if parent is re-rendered, its children also will be re-rendered even if it doesnt use state variable
  console.log("re rendered dummy button");
  return <button>asdad</button>
}
export default App

// note:
// instead of <Todo title="harkirat" description="harkirat2"></Todo>  i can also do
// <Todo title="harkirat" description="harkirat2" />

//if todos=[1,2] , [...todos,3] is actually [1,2,3]
