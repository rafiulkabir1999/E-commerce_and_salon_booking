const express = require('express')
const { Login } = require('../controller/user.js')
const {VerifyToken, VerifyAdmin} = require('../utils/verifyJWT.js')

const Router = express.Router();

Router.post('/login',Login)

Router.get("/verifylogin", VerifyToken,(req,res)=>{
  res.send("You are logedin")
})

Router.get("/verifyadmin", VerifyAdmin,(req,res)=>{
  res.send("You are logedin")
})

Router.post('/register',async(req,res) => {
     const {name,phone,password} = req.body
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    if(name && phone && password){

      const user =  new UserModel({
        name:name,
        phone:phone,
        password:hash
      })
      await  user.save();

        res.send("user register successfully")
    }
  } catch (error) {
     res.status(500)
  }

})

module.exports = Router