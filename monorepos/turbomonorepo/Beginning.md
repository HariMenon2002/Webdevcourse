Do npx create-turbo@latest and create a project. It actually gives a nextjs application
Do npm install

apps will contain the main code which the user sees, packages/ui will have my components.

cd apps/web and do npm run dev
if i didnt do cd apps/web and did npm run dev from root folder, it would have shown two sites, one for web and one for docs(docs will run on port 3001 as it is mentioned in its package.json)

explore packages/ui/package.json, you will notice its name is @repo/ui and what its exporting
Now in apps/web/package.json  "@repo/ui": "*"  is given , when you want to create another react app in apps (other than web and docs apps), in its package.json also we have to put "@repo/ui": "*"  in dependencies.

Lets us build a signup page which can be used in both docs and web apps. Create Signup.tsx in packages/ui/src. Make changes in package.json of ui also
Now you can import it in apps/web/app/page.tsx


You can also include another folder for backend in apps section 