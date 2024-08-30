Today we will understand how to add react and nodejs projects to our turbo repo

First go to apps/web/app/page.tsx and clear out. Then create admin.tsx. Also change packages/ui/package.json(ie to add admin). But this is very tedious so that is why we use turbo generators. Each time you need add a new component in ui, cd to packages/ui/ and run      npm run generate:component. It will ask the name of the component you need to generate and will update it in package.json as well.(explore config.ts in config.ts in ui/turbo)

In week-16-2/apps/web/app create an admin folder with page.tsx(a new route as it is nextjs)

Exploring turbo.json
It contains configuration for turborepo. If i give npm run build, turborepo must know where to go and build(ie here it should go both to web and docs). ^build means go to all folders and run build. When we do npm run build, a ./next folder will get created(in case of nextjs application) which will have all our build files. "outputs": [".next/**", "!.next/cache/**"] means our output in .next/ should be cached while .next/cache/** shouldnt be cached

Adding React projects:
cd week-16-2/apps, do npm create vite@latest, do npm install(in week-16-2/apps itself) , update package.json with dependency
  "@repo/ui":"*",

now if you do npm run dev, all the 3(web,docs and react-app will run . react-app runs on localhost:5173)