const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token=req.headers.authorization;
    //this will be in Bearer <token>format eg Bearer adsda 
    //therefore i have to extract the token ie split it from Bearer

    const words=token.split(" ");
    const jwtToken=words[1];

    try{
        const decodedValue=jwt.verify(jwtToken,JWT_SECRET);

        if(decodedValue.username){
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authenticated"
            })
        }
    }catch(e){
        res.json({"msg":"incorrect inputs"});
    }


}

module.exports = adminMiddleware;
