const Product_Model = require("../../model/product.js")

const create = async(req,res,next) => {
   try {
     const product = new Product_Model(req.body)
     await product.save();
   } catch (error) {
      next(error)
   }
}

const update = async(req,res,next) => {
    try {
      const product = new Product_Model(req.body)
      await product.save();
    } catch (error) {
       next(error)
    }
 }

module.exports = {create,update}