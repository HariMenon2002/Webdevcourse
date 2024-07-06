//for App4.jsx

//sometimes you need more than one atom for your use case,eg creating a todo application
//create a component that takes todo id as an input and renders the Todo,You need to store the todo in an atom
//all todos can be hardcoded as a variable instead of fetching from database
import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});

//here default is a function
//it first asks for id of the atom that you want and it returns default value for that particular atom