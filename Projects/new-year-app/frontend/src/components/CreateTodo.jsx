
export function CreateTodo(){  //export is needed to import it in the other file
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title"/><br/>

        <input style={{
            padding:10,
            margin:10
        }}type="text" placeholder="description"/><br/> 

        <button style={{
            padding:10,
            margin:10
        }}>Add a todo</button>
    </div>
}

//you can also do module.exports as well if you want instead of export