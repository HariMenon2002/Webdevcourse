import { useState } from "react"
//practise

function App(){
    const [count,setCount]=useState(0);

    return <div>
        <Head title={count}>fds</Head>
    </div>

}

function Head({title,children}){

    return <div>
        count is {title} <br/>
        {children}
        
    </div>

}

export default App