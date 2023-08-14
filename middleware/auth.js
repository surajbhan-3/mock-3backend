const  jwt  = require("jsonwebtoken")
require("dotenv").config();

const auth = (req,res,next)=>{

      const token = req.heades.authorization.split(" ")|| req.headers.authorization

      if(token){
        jwt.verify(token,process.env.skey, function (err,decoded){
            if(err){
                res.status(401).send({"msg":"login first"})
            }else{
                req.user =decoded;
                next;
            }
        })
        
        
      }else{
        res.status(401).send({"msg":"login first"})
      }
}


module.exports = {auth}



