Bootstrap the app
First do
 npx create-turbo@latest
Name the app to user-app

Add tailwind to it. 

cd apps/user-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Update tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Then Update global.css in apps/user-app/app

@tailwind base;
@tailwind components;
@tailwind utilities;
💡
Then do npm run dev. Sometimes it shows error, so re install tailwind.

 

Now we have to add Prisma
Create db folder inside packages.cd to packages/db and do npm init -y and npx tsc --init
Update its package.json with @repo. Now update its tsconfig.json
Then do npx prisma init(inside cd packages/db). Write the schema. Enter the db url and type npx prisma migrate dev --name init

Then do npx prisma generate

Create index.ts in db folder, add exports section to its package.json
Then do npm install(in cd week-17)

Now you can use prisma client from @repo/db. Thus @repo/db should be added as dependency in apps/user-app/package.json. Then again do npm install(in cd week-17)
Now in apps/user-app/app/page.tsx try importing prisma client