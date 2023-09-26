const express = require('express')
const { Login,Register ,Update ,GetallUser } = require('../controller/user.js')
const {VerifyToken, VerifyAdmin} = require('../utils/verifyJWT.js');
const bcrypt = require('bcrypt')


const Router = express.Router();

Router.get("/verifylogin", VerifyToken,(req,res)=>{
  res.send("You are logedin")
})

Router.get("/verifyadmin", VerifyAdmin,(req,res)=>{
  res.send("You are admin")
})

Router.get("/getalluser", VerifyAdmin,GetallUser)


Router.post('/login',Login)

Router.post('/register',Register)

Router.put('/update/:id',Update)


module.exports = Router