const getproduct = (req,res,next) => {
    res.send("Get all products")
}

const getproductbyid = (req,res,next) => {
    res.send("get product by id")
}
module.exports = {getproduct,getproductbyid}