const { CreateError } = require("../utils/error")
const Product_Model = require('../model/product.js')
const path = require('path')
const fs = require('fs')

const deletefile = async(product) => {
     try {  
         if(product === null || undefined) {
            return CreateError(404,'product not found')
         }
        const pathregular = path.join(__dirname,"../public/uploads/" + product.img.regular.filename)
        const pathsmall = path.join(__dirname,"../public/small/" + product.img.small.filename )
        

       fs.unlinkSync(pathregular,(err) => {
         if(err) throw err;
       })
       fs.unlinkSync(pathsmall,(err) => {
         if(err) throw err
       })
       
       console.log("testing")
     } catch (error) {
        return CreateError(500,"something went wrong")
     } 
}

module.exports = deletefile