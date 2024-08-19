First do npx create-next-app@latest
Give Yes for Typescript, ESLint, Tailwind, App router and No for src/ and import alias

Our main focus will be on app folder. First clear out existing content in page.tsx . Also remove most of the things from global.css

Do npm run dev. page.tsx gets rendered only of the root route(localhost:3000)

Nextjs has a file based router. This means that the way you create your files, describes what renders on a route. Go to app folder and create a folder called signup and inside that create page.tsx inside it. Now if i do localhost:3000/signup , it will give me signup page. Similarly you can create a signin page as well.

Put both signup and signin in auth folder.
Suppose you need localhost:3000/auth/sign , you need to create a sign folder inside an auth folder in app folder and inside sign folder have your page.tsx(like test folder in signin). To create dynamic routes, you must create a folder like [...courseId] 

Best part is that server will create a html file(server side rendering) which will not be so js dependent like in react

Layout lets you wrap all child pages inside some logic
You can have a layout.tsx inside for eg. auth. Thus all pages inside auth will use this layout.tsx. Create a layout.tsx in auth folder    

() helps you avoid the folder name in the route. If you rename auth folder to (auth) it will not be included in the route ie you can directly do localhost:3000/signin.

You need a components folder at the root level which is a good practise.(This folder name should also be included in tailwind.config.ts if not present)

                    Client and Server components
Nextjs expects you to identify all your components as either client or server
Server components are rendered on the server(server components are put on the html in the server itself), client components are pushed to the client to be rendered.
Every component is by default a server component. We had to explicitly tell the server that signin is a client component as it has an onClick handler. Whenever you use useState, useEffect etc they should also be client components as server doesnt understand any of this