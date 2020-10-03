const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=> {
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
        if(err){
            res.status(401).json({error:"you must be logged in"})
        }
        else {
            req.decoded = decoded;
            console.log("IIIIIIIIIIIII")
            console.log(decoded)
            next();
          }
    })
}