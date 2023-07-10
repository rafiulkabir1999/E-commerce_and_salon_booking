const express = require('express')
const Router = express.Router();
const {create ,update , delete_product} = require("../controller/product/create.js")
const {getproduct, getproductbyid} =  require("../controller/product/getproduct.js");
const { VerifyAdmin } = require('../utils/verifyJWT.js');

Router.get('/',getproduct)
Router.get('/:id',getproductbyid)

//create new product
//product/create/
Router.post('/create',VerifyAdmin,create)
Router.put('/update/:id',VerifyAdmin,update)
Router.delete('/delete/:id',VerifyAdmin,delete_product)

module.exports = Router;