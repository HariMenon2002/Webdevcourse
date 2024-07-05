import { atom, selector } from "recoil";

export const countAtom=atom({
    key:"countAtom",       //unique way to identify the atom
    default:0
});

//dont have same keys for two diff atoms

export const evenSelector=selector({   //for app7.jsx
    key:"evenSelector",
    get:(props)=>{
        const count=props.get(countAtom);  //ie. evenSelector depends on countAtom 
        return count%2;
    }
})

export const filteredTodos=selector({  //for App8.jsx
    key:"filteredTodos",
    get:(props)=>{
        const todos=props.get(todosAtom);
        const filter=props.get(filterAtom);

        return todos.filter(x=>x.title.includes(filter)||x.description.includes("filter"))
    }

})