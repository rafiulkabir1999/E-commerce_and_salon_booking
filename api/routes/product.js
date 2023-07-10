const express = require('express')
const Router = express.Router();
const {create} = require("../controller/product/create.js")
const {getproduct, getproductbyid} =  require("../controller/product/getproduct.js");
const { VerifyAdmin } = require('../utils/verifyJWT.js');

Router.get('/',getproduct)
Router.get('/:id',getproductbyid)

//create new product
Router.post('/create',VerifyAdmin,create)

module.exports = Router;