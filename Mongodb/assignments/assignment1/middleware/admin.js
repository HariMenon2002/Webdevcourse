const {Admin}=require("../db/index")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username=req.headers.username;
    const password=req.headers.password;
    const value=await Admin.findOne({
        username:username,
        password:password
    });
    if(value){
        next();
    }
    else{
        res.status(403).json({
            msg:"user doesnt exist"
        })
    }
    //check if this admin exists in the database wiht the given username and password
}

module.exports = adminMiddleware;