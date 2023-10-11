 const UserModel = require("../model/user.js")
 const bcrypt = require("bcrypt")
 const jwt = require('jsonwebtoken')
 const {CreateError} = require("../utils/error.js")

//@dec user login
//@route host/user/login

const Login = async(req,res,next) => {
    
    try {
       const user = await  UserModel.findOne({phone:req.body.phone})
      
      if(!user) next(CreateError(404,"user not found")) 
      
      const match = await bcrypt.compare(req.body.password, user.password);
      if(match){
        const token = jwt.sign({ id: user._id, isAdmin : user.isAdmin, phone:user.phone},process.env.JWT_SECRET)
        res.cookie('access_token',token,{
          httpOnly:true,
          secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
          sameSite: 'strict', // Prevent CSRF attacks
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        // maxAge: 60*1000, // 1 minute
        }).send({name:user.name,phone:user.phone})
      }
      else next(CreateError(401,'Unauthorized'))


    } catch (error) {
      next(CreateError(500,'someting went wrong'))
    }
}
const Logout = async(req,res,next) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfully' });
  
  } catch (error) {
    
  }
}

const Register = async(req,res,next) => {
  const {name,phone,password,isAdmin} = req.body
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const exsisting_user = await UserModel.findOne({phone:phone})

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
    if(req.body.password){
      const salt =  bcrypt.genSaltSync(10);
      req.body.password =  bcrypt.hashSync(req.body.password, salt);
    }
   
     const user = await UserModel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
     res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const GetallUser = async(req,res,next) => {
  try {
    const users = await UserModel.find();
    res.send(users)
  } catch (error) {
    CreateError(error)
  }
}

const getUserDetails = async(req,res,next) => {
  try {
    const user = await UserModel.findOne({phone:req.params.phone})
    res.send(user)
  } catch (error) {
    next(error)
  }
}

module.exports={Login,Logout, Register ,Update,GetallUser  ,getUserDetails}