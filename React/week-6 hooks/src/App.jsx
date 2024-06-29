//Wrapper class
//suppose the website has a lot of cards(boxes)
//you can create a wrapper card component that takes the inner react component as an input

//First let us create a todo application
import { useState } from 'react'
import React,{Fragment} from 'react';


function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent/>}/>
  </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

function CardWrapper(props){     
  
  return <div style={{border:"2px solid black"}}>
    {props.innerComponent}
  </div>
  
}




export default App  




