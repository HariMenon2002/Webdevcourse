Step 1 - NextJS Intro, Pre-requisites
(https://projects.100xdevs.com/tracks/nextjs-1/next-2)
NextJS Intro
NextJS was a framework that was introduced because of some minor inconviniences in React
-In a React project, you have to maintain a separate Backend project for your API routes
-React does not provide out of the box routing (you have to use react-router-dom)
-React is not SEO Optimised(biggest reason) -not exactly true today because of React Server components
-Waterfalling problem

SEO Optimisation
Google/Bing has a bunch of crawlers that hit websites and figure out what the website does. It ranks it on Google based on the HTML it gets back(based on keywords in the html).The crawlers DONT usually run your JS and render your page to see the final output. 

The "waterfalling problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.

Nextjs offerings:
Next.js provides you the following upsides over React
Server side rendering - Get’s rid of SEO problems
API routes - Single codebase with frontend and backend
File based routing (no need for react-router-dom)
Bundle size optimisations, Static site generation
Maintained by the Vercel team
 
Downsides - 
Can’t be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
Very opinionated, very hard to move out of it

Nextjs in Backend
In nextjs, the same process can handle frontend and backend unlike react.
It maintains single codebase, no cors issue, single domain name and easy to deploy.
