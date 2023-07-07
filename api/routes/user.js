const express = require('express')
const UserModel = require("../model/user.js")
const bcrypt = require("bcrypt")

const Router = express.Router();

Router.post('/login',(req,res) => {
     
})

Router.post('/register',async(req,res) => {
     const {name,phone,password} = req.body
  try {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          password = hash
        });
    });

    if(name && phone && password){

       
      
    
      console.log(genHash())
      const user =  new UserModel({
        name:name,
        phone:phone,
        password:password
      })
     // await  user.save();

        res.send("user register successfully")
    }
  } catch (error) {
     res.status(500)
  }

})

module.exports = Router