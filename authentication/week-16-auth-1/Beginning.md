## Cookie authentication 

First we will clone the repository from https://github.com/100xdevs-cohort-2/week-16-auth-1  
Do cd backend and then npm install 

In backend/src/index.ts we are using a library called cookie parser which is a middleware for parsing cookie and gets you an object. Do npm run build and npm run start to test the backend. Go to postman(if you want to test) and send a post request on http:localhost:3000/signin and other test other endpoints.

cd frontend and do npm install. Then do npm run dev. If you are not able to see cookie after signing in (most probably because you used the same username and password while testing backend and already generated cookie) make sure you have cleared all cookies by going to localhost:3000 and clicking on logout and try signing in again 

In this application , as the backend also has its own frontend , try it out at localhost:3000
