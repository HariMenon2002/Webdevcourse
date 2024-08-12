Monorepo(modules or packages) is mainly used when frontend and backend share code

Clone repo from https://github.com/100xDevs-hkirat/week-8-repo, cd into it and first do rm -rf .git to remove its original git history.

Then do cd client and cd server and do npm install in each
cd server and do npm install zod. Also do tsc -b

First go to server/routes/auth.ts for zod validation    

You can create a common folder which has very small modules which can be shared by both backend and frontend
cd common and do npm init -y and npx tsc --init. Create a src file in common to store all your ts files. Do npm install zod in common folder

Now our plan is to publish common folder as a library which can be shared by both frontend and backend. You might ask why we cant directly import it. That is because:
1.There will be too many relative paths
2.It will be difficult to compile in ts as it will be outside source folder

Before monorepo, we used to publish it in npm so that other people can use it.For that go to npmjs.com and create an account. Then (in cd common) do npm login.
Go to package.json in common folder and change name to @your_npm_acccount_username/common. Also change main to dist/index.js

I dont want to publish my ts files ,so i can create a .npmignore file 

Then (in cd common) do npm publish --access=public 
If i do npm pack, a compressed file will come in my common folder which when i uncompress will show me all the folders that i have published. Suppose i make changes and i want to publish it again, I have to change version number in package.json and do npm publish.

Now do cd client  and then npm install @your_npm_acccount_username/common (right now i am using @100xdevs/common of harikrat). Do the same in cd server

Another thing to note is that you need a declaration file in common ie index.d.ts. This is needed because when we import this file (index.js) in client and server typescript cant identify the type as we have not published the ts files. It will have just the types(or interfaces) and not the actual js runtime code. To create this .d.ts file , go to tsconfig.json file in common and put declaration as true. Then do tsc -b(in cd common) and then you will see index.d.ts has been created in dist folder. Now publish it again(dont forget to change version) 

Then in package.json of client and server , change the version number of the package do rm -r node_modules(to remove the existing modules) and do npm install again   

So this is how things used to happen before monorepos

                    Understanding monorepos
For this we will use turbo
Turborepo (often referred to simply as Turbo) is a high-performance build system specifically designed for managing monorepos. It provides tooling and features that help developers efficiently build, test, and deploy large-scale projects with many interdependent packages or applications. Turborepo optimizes workflows in a monorepo environment, making it easier to manage complex codebases and reduce build times.

Run npx create-turbo@latest and give your project name