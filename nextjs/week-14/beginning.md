First do npx create-next-app@latest
Give Yes for Typescript, ESLint, Tailwind, App router and No for src/ and import alias

Our main focus will be on app folder. First clear out existing content in page.tsx . Also remove most of the things from global.css

Do npm run dev. page.tsx gets rendered only of the root route(localhost:3000)

Nextjs has a file based router. This means that the way you create your files, describes what renders on a route. Go to app folder and create a folder called signup and inside that create page.tsx inside it. Now if i do localhost:3000/signup , it will give me signup page. Similarly you can create a signin page as well.

Suppose you need localhost:3000/auth/sign , you need to create a sign folder inside an auth folder in app folder and inside sign folder have your page.tsx
