//todo app using atom family
import './App.css'
import { RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';


console.log(k,typeof(k))

function App() {
  
  return <RecoilRoot>
    <UpdateComponent></UpdateComponent>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdateComponent(){
  const updateTodo=useSetRecoilState(todosAtomFamily(2)); //to update todo with id 2

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id:"2",
        title:"new todo",
        description:"new todo"
      })
    },5000)
  },[])

  return <div></div>
}

function Todo({id}) {

//   const todoAtom=atom({    this is not a good approach as even if i repeatedly call <Todo id={2}>, it creates diff atoms for same id
//    key:"todoAtom",
//    default:{
//      id: 1,
//      title: "Go to Gym",
//      description: "Hit the gym from 7-9"
//    }
//   })
//  const todo=useRecoilValue(todo);

 const [todo, setTodo] = useRecoilState(todosAtomFamily(id));//you have to specify to get a particular atom


  return (
    <>
      
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App