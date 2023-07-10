const jwt = require('jsonwebtoken')
const {CreateError} = require('./error.js')


const VerifyToken = (req,res,next) => {
    try {
        const token = req.cookies.access_token
        if(!token){
           return next(CreateError(401,'not authenticted'))
        }
        jwt.verify(token,process.env.JWT_SECRET,(err,user) => {
            if(err) return next(CreateError(403,'Token is not valid'))
            req.user = user
            next();
        })
      } catch(err) {
         next(CreateError(500,'something went wrong'))
      }
}

const VerifyAdmin = (req,res,next ) => {
    try { 
        VerifyToken(req,res,()=>{  
            if(req.user.isAdmin) next();
            else next(CreateError('403','not authorize'))
        })
        }
        
     catch (error) {
        next(500,'something went wrong')
    }
}

module.exports = {VerifyToken , VerifyAdmin}