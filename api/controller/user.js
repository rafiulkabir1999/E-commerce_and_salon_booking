 const UserModel = require("../model/user.js")
 const bcrypt = require("bcrypt")
 const jwt = require('jsonwebtoken')
 const {CreateError} = require("../utils/error.js")



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
      else next(CreateError(404,'user not found'))
    } catch (error) {
      next(CreateError(500,'someting went wrong'))
    }
}


const Register = async(req,res,next) => {
  const {name,phone,password,isAdmin} = req.body
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const exsisting_user = await UserModel.find({phone:phone})
   if(exsisting_user){
      next(CreateError(409,'user already exist'))
   }
    else if(name && phone && password){

      const user =  new UserModel({
        name:name,
        phone:phone,
        password:hash,
        isAdmin:isAdmin,
      })
      await  user.save();

        res.send("user register successfully")
    }
    next(CreateError(404,'Not valid'))
  } catch (error) {
     next(error)
  }
}

const Update = async(req,res,next) => {
  try {
    const salt =  bcrypt.genSaltSync(10);
    req.body.password =  bcrypt.hashSync(req.body.password, salt);
   
     const user = await UserModel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
     res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
module.exports={Login, Register ,Update}