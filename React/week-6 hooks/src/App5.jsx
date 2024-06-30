//Wrapper class
//suppose the website has a lot of cards(boxes)
//you can create a wrapper card component that takes the inner react component as an input

//First let us create a todo application
import { useState } from 'react'
import React,{Fragment} from 'react';

// function App() {
//   return <div>
//     <CardWrapper innerComponent={<TextComponent/>}/>
//     <CardWrapper innerComponent={<TextComponent2/>}/>
//   </div>
// }

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }

// function TextComponent2(){
//   return <div>
//     hi there2222
//   </div>
// }

// function CardWrapper(props){     
//   return <div style={{border:"2px solid black"}}>
//     {props.innerComponent}
//   </div>
// }
// export default App  

//you can use the above syntax for wrapper class ,but it is not the real way
//The real wrapper is

function App() {
  return <div>
    <CardWrapper>
      Hi there    
      <div>good boy</div>     
    </CardWrapper>

    <CardWrapper>
      Hello the 2nd       
    </CardWrapper>
  </div>
}



function CardWrapper({children}){      //will have everything written inside CardWrapper
  console.log(children)
  return <div style={{border:"2px solid black",padding:20}}>
    {children}
  </div>
}
export default App  



