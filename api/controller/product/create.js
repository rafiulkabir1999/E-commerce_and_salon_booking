const Product_Model = require("../../model/product.js")
const deletefile = require("../deletefile.js")
const upload = require("../fileuploader.js")
const resizeImage = require('../resizefile.js')
const HOST =process.env.HOST || "localhost:4000/"


const create = async(req,res,next) => {
   try {
  
     resizeImage(req , res , async()=> {

      req.body.img = {
        regular :{
          filename: req.file.filename,
          url:HOST + "photo/uploads/" +req.file.filename,
        }, 
        small :{
          filename: req.file.filename,
          url: HOST + "photo/small/" +req.file.filename
        } }
        const product = new Product_Model(req.body)
        await product.save();
       res.send(req.body)
       
     })
     
    
   } catch (error) {
      next(error)
   }
}

const update = async(req,res,next) => {
    try {

      resizeImage(req , res , async()=> {

        req.body.img = {
          regular :{
            filename: req.file.filename,
            url:HOST + "photo/uploads/" +req.file.filename,
          }, 
          small :{
            filename: req.file.filename,
            url: HOST + "photo/small/" +req.file.filename
          } 
        }
      await Product_Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(req.body)
        
      })
     
     
    } catch (error) {
       next(error)
    }
 }

 const delete_product = async(req,res,next) => {
   try {
  deletefile(req,res,async()=>{
    
    await Product_Model.findByIdAndDelete(req.params.id)
    res.send("Product has been remove from your database")
  })
    
   } catch (error) {
      next(error)
   }
}

module.exports = {create,update ,delete_product}