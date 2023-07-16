const { CreateError } = require("../utils/error")
const Product_Model = require('../model/product.js')
const path = require('path')
const fs = require('fs')

const deletefile = async(product) => {
     try {  
     
      if(product === null || product === undefined){
        next(CreateError(404,"product not found"))
      }
      
     
      const url = path.join(__dirname,"../../public/uploads/" + product.regular.filename)
      const urlsmall = path.join(__dirname,"../../public/small/" + product.small.filename)
       
 
       fs.unlinkSync(url)
       fs.unlinkSync(urlsmall)
     
       
       console.log("deleteing older file ")
     } catch (error) {
        return CreateError(500,"something went wrong")
     } 
}

module.exports = deletefile