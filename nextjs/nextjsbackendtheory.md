Nextjs backend theory Data fetching
In React for datafetching, browser would first request for the react website link from CDN  which would return an empty html. Then it would ask for js file and get it, then it fetches data from backend server and gets the data and renders it.

If you do the same in nextjs, its seo capabilities decrease. So in nextjs, browser will ask for the website link from nextjs server, nextjs server will ask for data  details from backend server which returns a json to nextjs server. Then only willnextjs server return a html page with the data to the browser. Thus you should fetch details(data) on server side and pre-render the page before returning it to the user(browser).

Introducing api routes in Next.js:
Nextjs lets you write backend routes just like express. Thus it is a full stack framework. Server components can directly talk to backend

