const Product_Model = require("../../model/product.js")

const create = async(req,res,next) => {
   try {
     const product = new Product_Model(req.body)
     await product.save();
     res.send(req.body)
   } catch (error) {
      next(error)
   }
}

const update = async(req,res,next) => {
    try {
      await Product_Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(req.body)
     
    } catch (error) {
       next(error)
    }
 }

 const delete_product = async(req,res,next) => {
   try {
     await Product_Model.findByIdAndDelete(req.params.id)
     res.send("Product has been remove from your database")
    
   } catch (error) {
      next(error)
   }
}

module.exports = {create,update ,delete_product}