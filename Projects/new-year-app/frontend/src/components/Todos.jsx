/*
todos=[                              //it is an array
    {
        title:"go to gym",
        description:"go to gym btw 9-10"
    }
]
*/
export function Todos({todos}){   //you can also do Todos(props)
    //const todos=props.todos
    return <div>
        {todos.map(function(tod){
            return <div>
                <h1>{tod.title}</h1>
                <h1>{tod.description}</h1>
                <button>{tod.completed==true?"completed":"mark as completed"}</button>
            </div>
        })}
    </div>
}