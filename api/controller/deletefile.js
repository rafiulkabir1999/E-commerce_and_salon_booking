const { CreateError } = require("../utils/error")
const Product_Model = require('../model/product.js')
const path = require('path')
const fs = require('fs')

const deletefile = async(req,res,next) => {
     try {  
        const deleteitem = await Product_Model.findOne({ _id : req.params.id })
        console.log(deleteitem)
        if(deleteitem === null ){
            console.log("its calling")
           return next(CreateError(404,'user not found'))
        }
        
        const pathregular = path.join(__dirname,"../public/uploads/" + deleteitem.img.regular.filename)
        const pathsmall = path.join(__dirname,"../public/small/" + deleteitem.img.small.filename )
        console.log(pathregular)
    
            //delete regular file
            fs.unlinkSync(pathregular)
            //delete small file
            fs.unlinkSync(pathsmall)
         console.log(pathregular)   
            //next();
      
     } catch (error) {
        next(CreateError(500,"something went wrong"))
     } 
}

module.exports = deletefile