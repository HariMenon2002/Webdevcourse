Cloudflare can be used to deploy your backend.Go to https://workers.cloudflare.com/ and create an account

Create a worker in cloudflare website

Do npm create cloudflare -- my-app. This creates a folder called my-app which will have the modules. Select category as Hello World Example with Hello World worker.Select language as typescript and select no if it asks whether the application is deployed

Do npm run dev here in the terminal

Wrangler is like a command line, so you need to first login to your account by doing the below command in the terminal
npx wrangler login

Run npx wrangler whoami  to get details about your account

npm run deploy, this will deploy my project, it will also give a l