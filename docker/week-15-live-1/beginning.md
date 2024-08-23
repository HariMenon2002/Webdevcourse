We are trying to create a docker file for this repo

First clone this repo from https://github.com/100xdevs-cohort-2/week-15-live-1.git. Then if you want to try locally(without docker) do npm install, npx prisma generate and then npm run build and then node dist/index.js

First create a dockerfile in the root folder

Dockerfile must begin with a base image from where we will start(specified by FROM).ie user must have that image as a prerequisite. 

WORKDIR is the working directory which will tell us where the commands(in the dockerfile) will be run on.

COPY . . means copy source code of application(including node modules) to the working directory. Create a .dockerignore file so that the node modules are ignored(as we will anyway get them when we do npm install)

Then specify all the commands using RUN. These just build the application and not start it

Now specify the port that will be exposed in the container(according to index.ts here)

CMD command runs when you start the container, rest commands runs when you create the image. That is why it is different from RUN. Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.

To create the image, do 
     docker build -t backend-app .
-t is used to name the image(here backend-app). . means you are building the image here 

now just do docker run -p 3000:3000 backend-app and go to browser and do localhost:3000

You can also pass in env variables. Either you can do ENV DATABASE_URl=".." inside dockerfile which is not recommended as we have to commit it, or you can directly do

docker run -p 3000:3000 -e DATABASE_URL=".." backend-app    

Some other commands:
docker exec- to execute a command inside a container
for eg docker exec -it container_id /bin/bash and now i can do ls and other commands. type exit and come out of it 