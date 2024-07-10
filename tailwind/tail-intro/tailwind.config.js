/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*

i can do something like 
extend:{
  colors:{
    blue:{
      700:"#146eb4"
    }
  }
}

now when i ask for eg blue-700 it gives this color
*/

