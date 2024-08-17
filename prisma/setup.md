Create project setup
As a first step, create a project directory and navigate into it:

mkdir prisma
cd prisma

Next, initialize a TypeScript project and add the Prisma CLI as a development dependency to it:

npm init -y
npm install prisma typescript ts-node @types/node --save-dev

This creates a package.json with an initial setup for your TypeScript app.

Next, initialize TypeScript:

npx tsc --init

info
See installation instructions to learn how to install Prisma using a different package manager.

You can now invoke the Prisma CLI by prefixing it with npx:

npx prisma

Next, set up your Prisma ORM project by creating your Prisma Schema file with the following command:

npx prisma init

This command does two things:

creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with your database connection variable and schema models
creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)


Install and generate Prisma Client
To get started with Prisma Client, you need to install the @prisma/client package:

npm install @prisma/client

The install command invokes prisma generate for you which reads your Prisma schema and generates a version of Prisma Client that is tailored to your models.