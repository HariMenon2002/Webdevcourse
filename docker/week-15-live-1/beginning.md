We are trying to create a docker file for this repo

First clone this repo from https://github.com/100xdevs-cohort-2/week-15-live-1.git. Then if you want to try locally(without docker) do npm install, npx prisma generate and then npm run build and then node dist/index.js

First create a dockerfile in the root folder

Dockerfile must begin with a base image from where we will start(specified by FROM).ie user must have that image as a prerequisite. 

WORKDIR is the working directory which will tell us where the commands(in the dockerfile) will be run on.

COPY . . means copy source code of application(including node modules) to the working directory

Then specify all the commands using RUN. These just build the application and not start it

Now specify the port that will be exposed in the container(according to index.ts here)