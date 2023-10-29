const express = require('express')
const Router = express.Router();
const {create ,update , delete_product} = require("../controller/product/create.js")
const {getproduct, getproductbyid, getProductByCetegory} =  require("../controller/product/getproduct.js");
const { VerifyAdmin } = require('../utils/verifyJWT.js');
const upload = require("../controller/fileuploader.js")

Router.get('/',getproduct)
Router.get('/:id',getproductbyid)

//localhost:4000/product/search/Electronics
//get request 
//public request
Router.get('/search/:cetegory', getProductByCetegory)

//create new product
//product/create/
Router.post('/create',VerifyAdmin,upload.single('img'),create)
Router.put('/update/:id',VerifyAdmin,upload.single('img'),update)
Router.delete('/delete/:id',VerifyAdmin,delete_product)

module.exports = Router;