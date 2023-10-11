const express = require('express')
const { Login,Register ,Update ,GetallUser, getUserDetails, Logout } = require('../controller/user.js')
const {VerifyToken, VerifyAdmin, VerifyUser} = require('../utils/verifyJWT.js');
const bcrypt = require('bcrypt')


const Router = express.Router();

Router.get("/verifylogin", VerifyToken,(req,res)=>{
  res.send("You are logedin")
})

Router.get("/verifyadmin", VerifyAdmin,(req,res)=>{
  res.send("You are admin")
})

//to get all the user from database
Router.get("/getalluser", VerifyAdmin,GetallUser)

//to get logedin user personal details
Router.get('/userdetails/:phone',VerifyUser,getUserDetails)


Router.post('/login',Login)
Router.get('/logout',Logout)
Router.post('/register',Register)

Router.put('/update/:id',Update)


module.exports = Router