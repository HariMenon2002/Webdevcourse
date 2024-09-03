import { useState } from "react";
//just for practise

const App=()=>{
    const [count,setCount]=useState(0);

    function ab(){
        setCount((abc)=>abc+1);
    }

    return <div>
        <button onClick={ab
        }>
        
        </button>
    </div>
}

export default App;