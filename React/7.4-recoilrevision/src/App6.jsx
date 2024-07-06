//What happens when values arent loaded immediateley?How can we show loader on screen

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* <Suspense fallback={"loading"}>   you dont need suspense while using userecoilstateloadable or userecoildvalueloadable*/}
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    {/* </Suspense> */}
  </RecoilRoot>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   /*
  The todo  here is an object which has state and contents

  you can also so
  const todo=useRecoilValueLoadable(todosAtomFamily(id));
   */
   

  console.log(todo.state);
  if(todo.state=="loading"){
    return <div>
      loading...
    </div>
  }
  else if(todo.state=="hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  } 

  else if(todo.state=="hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }
}

export default App