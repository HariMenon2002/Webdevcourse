import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  //the below is how i normally would write in react
  // return (
  //   <>
  //    <div style={{display:"flex",justifyContent:"space-around"}}> {/*this is how you style in react without tailwind */}
  //       <div style={{background:"red"}}>hi</div>
  //       <div style={{background:"green"}}>hi</div>
  //       <div style={{background:"yellow"}}>hi</div>
  //    </div>
  //   </>
  // )

     return (
       <>
          <div className='flex justify-around'>
           <div className='bg-red-500'>hi</div>
           <div className='bg-yellow-500'>hi</div>
           
          </div>
       </>
     )
}

export default App

//in browser go to tailwind installation using framework guides and go to vite section
//do npm install -D tailwindcss postcss autoprefixer in terminal
//then do npx tailwindcss init -p

//from the docs copy the content section and paste it in tailwind.config.js
//Add tailwind directives like @tailwind base, etc. from docs into index.css

//you can now use tailwind, now do normal like npm run dev
