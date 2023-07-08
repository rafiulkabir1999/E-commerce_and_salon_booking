const express = require('express')
const UserModel = require("../model/user.js")
const bcrypt = require("bcrypt")

const Router = express.Router();

Router.post('/login',async(req,res) => {
    console.log(req.body.phone)
  try {
     const user =await  UserModel.find({phone:req.body.phone})
     const match = await bcrypt.compare(req.body.password, user[0].password);
    if(match){
      console.log("Login SuccessFully")
      res.send("success")
    }
  } catch (error) {
    res.send('Login Failed')
  }
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