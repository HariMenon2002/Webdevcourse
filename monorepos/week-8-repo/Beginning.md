Clone repo from https://github.com/100xDevs-hkirat/week-8-repo, cd into it and first do rm -rf .git to remove its original git history.

Then do cd client and cd server and do npm install in each
cd server and do npm install zod. Also do tsc -b

First go to server/routes/auth.ts for zod validation    

You can create a common folder which has very small modules which can be shared by both backend and frontend
cd common and do npm init -y and npx tsc --init. Create a src file in common to store all your ts files. Do npm install zod in common folder