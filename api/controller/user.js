 const UserModel = require("../model/user.js")
 const bcrypt = require("bcrypt")
 const jwt = require('jsonwebtoken')
 const Login = async(req,res,next) => {
    
    try {
       const user =await  UserModel.find({phone:req.body.phone})
       const match = await bcrypt.compare(req.body.password, user[0].password);
      if(match){
        const token = jwt.sign({ id: user._id, isAdmin : user.isAdmin},process.env.JWT_SECRET)
        res.cookie('access_token',token,{
          httpOnly:true
        }).send("success")
      }
      else next(err)
    } catch (error) {
     next(error)
    }
}
module.exports={Login}