const Product_Model = require("../../model/product.js")
const getproduct = async(req,res,next) => {
    try {
        const product = await Product_Model.find();
        res.send(product)
    } catch (error) {
        next(error)
    }
}

const getproductbyid = async(req,res,next) => {
    try {
        const product = await Product_Model.findOne({_id : req.params.id});
        res.send(product)
    } catch (error) {
        next(error)
    }
}

const getProductByCetegory = async(req, res , next) => {
    console.log(req.params.cetegory)
    try {
        const product = await Product_Model.find({cetegory: req.params.cetegory})
        console.log(product)
        res.send(product)
    } catch (error) {
        next(error)
    }
}



module.exports = {getproduct,getproductbyid ,getProductByCetegory}