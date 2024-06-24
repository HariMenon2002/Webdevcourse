const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    const token=req.headers.authorization;
    //this will be in Bearer <token>format eg Bearer adsda 
    //therefore i have to extract the token ie split it from Bearer

    const words=tokens.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);

    if(decodedValue.username){
        req.username=decodedValue.username; //i will need username in the future(in user.js of routes)
        next();
    }
    else{
        res.status(403).json({
            msg:"you are not authenticated"
        })
    }
}

module.exports = userMiddleware;
