//randomly practising tailwind
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
           <div className='bg-red-500 '>hi</div>
           <div className='bg-yellow-500'>hi</div>
           
          </div>

          <div className='grid grid-cols-3'>
            <div className='bg-red-500'>hiii</div>
            <div className='bg-yellow-500'>hiii</div>
          </div>

          <div className='grid grid-cols-10'>
            <div className='bg-red-500 col-span-4'>hey</div>
            <div className='bg-yellow-500 col-span-4'>hey</div>
            <div className='bg-yellow-500 col-span-2'>hey</div>
          </div>

          <div className='bg-red-500 md:bg-blue-500 sm:bg-yellow-500'>change</div>

          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='bg-blue-500 text-yellow-500'>child1</div>
            <div className='bg-violet-500'>child2</div>
            <div className='bg-purple-500'>child3</div>

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

/*
Tailwind is mobile first breakpoint system ie unprefixed utilities like 'uppercase' takes effect on all screen sizes while prefixed utilities like 'md:uppercase' only take effect at the specified breakpoint or above
eg sm:text-center will work only above 640px
Use unprefixed utilities to target mobile and override them at larger breakpoints

eg <div class="text-center sm:text-left"></div>
this will center  text on mobile and left align it on screens 640px and wider


*/
