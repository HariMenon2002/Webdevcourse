//suppose i want a website with post endpoint and get endpoint, in post endpoint, i will send a request with username and password as body and it returns a token with username encrypted if the user is present in inmemory database ie here ALL_USERS
//my get endpoint expects an authorization header so that it can check and it returns an array of all users if user is signed in if the token is correct else it returns an error

const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="123456";

const app=express();
app.use(express.json());

const ALL_USERS=[
    {
        username:"harikrat@gmail.com",
        password:"123",
        name:"Harikrat Singh",
    },
    {
        username:"raman@gmail.com",
        password:"123321",
        name:"Raman Singh",
    },
    {
        username:"priya@gmail.com",
        password:"123321",
        name:"Priya Kumari",
    }
];

function userExists(username,password){
    userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i]["username"]==username && ALL_USERS[i]["password"]==password){
            userExists=true;
        }
    }
    return userExists;
}

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if (!userExists(username, password)) {
        return res.status(403).json({
          msg: "User doesnt exist in our in memory db",
        });
      }
    
      var token = jwt.sign({ username: username }, jwtPassword);  //creates a token
      return res.json({
        token,
      });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
      const decoded = jwt.verify(token, jwtPassword);
      const username = decoded.username;
      // return a list of users other than this username from the database
    } catch (err) {
      return res.status(403).json({
        msg: "Invalid token",
      });
    }
  });
  
  app.listen(3000);
