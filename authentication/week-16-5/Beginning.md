Create a next app called week-16-5 using npx create-next-app@latest
Create an api/test folder in app

What if i need api/test/user1 , api/test/user2, api/test/user1/random etc. all to route to one , I can use catch all route. For that use [...any_name].

The next question is how can i extract routes? eg how to get /courses/2 if I am sending a request from apps.100xdevs.com/courses/2. For that you can use the second argument in get or post request

Give nextauth access to a catch all
Create app/api/auth/[...nextauth] folder   Note: [...nextauth] should be like this itself, it cant be a random name
First install next-auth and then code in route.ts

Also create a .env file to keep your secrets like url where it is going to be deployed, secrets to encode tokens etc.

Now you have to add session provider in app/layout.tsx. Instead of directly providing it , you can create seperate file in app for providers. useSession() used in AppBar can be used only if AppBar is client component. Thus for all client components you can do useSession() to get session details(ie what the session returns)

To get session details in server side components check app/user/page.tsx
To get session details in api components check app/api/user/route.ts