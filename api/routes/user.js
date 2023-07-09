const express = require('express')
const {Login} = require('../controller/user.js')

const Router = express.Router();

Router.post('/login',Login)


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