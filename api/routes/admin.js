const express = require("express")
const Router = express.Router();
const product = require("../controller/product/product.js")

//Create // Update // Delete // 
//admin/product/
Router.use("/",product)

module.exports = Router;