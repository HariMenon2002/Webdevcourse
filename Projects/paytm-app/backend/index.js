//In index.js file, route all request to /api/v1 to an apiRouter defined in backend/routes/index.js by importing it here

const express=require("express")
const cors=require("cors");

app.use(cors());
app.use(express.json());
const mainRouter=require("./routes/index");

const app=express();

app.use("/api/v1",mainRouter);  //app.use is also used for routing

app.listen(3000);

