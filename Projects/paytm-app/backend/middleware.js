//verifies if token is valid and put userId in request object if token checks out

const {JWT_SECRET}=require("./config");
const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){  //header should be in this format
        return res.status(403).json({message:"invalid"})
    }

    const token=authHeader.split(' ')[1];

    try{
        const decoded=jwt.verify(token,JWT_SECRET);

        if(decoded.userId){
            req.userId=decoded.userId;
            next();
        }
        else return res.status(403).json({});
    }catch(err){
        return res.status(403).json({})
    }
    
}

module.exports={authMiddleware}