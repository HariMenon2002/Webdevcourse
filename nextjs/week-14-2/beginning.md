Initialize an empty next project using npx create-next-app@latest and do npm install axios. Clean up page.tsx and global.css. Do npm run dev to test

Moving backend to our app:
We want to introduce a route that returns hardcoded values for a user’s details (email, name, id)
Always follow this standard routing structure in nextjs
1.Introduce a new folder called api
2.Add a folder inside called user(ie. if i want to create a user route)
3.Add a file inside called route.ts
4.Initialize a GET route inside it


For database, first do npm install prisma, then npx prisma init
Do npx prisma migrate dev --name init_schema
Then do npx prisma generate