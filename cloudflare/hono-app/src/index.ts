import { Hono } from 'hono' //hono is a framework for routing

const app = new Hono()

async function authMiddleware(c:any,next:any){
  
    if (c.req.header("Authorization")) {
      // Do validation
      await next()
    } else {
      return c.text("You dont have acces");
    }
  
}


//app.use(authMiddleware)           this is if i want to use for every route

app.post('/',authMiddleware, async (c) => {   //after npm run dev, go to postman and do http://localhost:8787/?param=2. Also give body and header(authorization)
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hello Hono!') //you can also do c.json({message:"hi  "})
})

app.post('/user', (c) => {
  return c.text('Hello Hono!')
})

export default app

//do npm run deploy
