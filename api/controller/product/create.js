const Product_Model = require("../../model/product.js")
const deletefile = require("../deletefile.js")
const upload = require("../fileuploader.js")
const resizeImage = require('../resizefile.js')
const HOST =process.env.HOST || "localhost:4000/"
const path = require('path')
const fs = require('fs')
const { CreateError } = require("../../utils/error.js")

//create product
const create = async(req,res,next) => {
   try {
  
    if(req.file){
      resizeImage(req.file).then(async()=> {

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
          const product = new Product_Model(req.body)
          await product.save();
         res.send(req.body)
         
       })
    }
     
    
   } catch (error) {
      next(error)
   }
}
//update product
const update = async(req,res,next) => {
    try {
     
      if(req.file){
        resizeImage(req.file).then(async()=> {

          const url = Product_Model.findOne({ _id : req.params.id})
          
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
             const result = await Product_Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
             res.send(result)
         
          res.send(req.body)
           
        })
    
      }
    
     else{
      console.log("see")
      console.log(req.body)
      const result = await Product_Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.send(result)
     }

    } catch (error) {
       next(error)
    }
 }
//delete product
 const delete_product = async(req,res,next) => {
   try {

    const product =await Product_Model.findOne({ _id : req.params.id})
    console.log(product)
    if(product === null || product === undefined){
      next(CreateError(404,"product not found"))
    }
    
   
    const url = path.join(__dirname,"../../public/uploads/" + product.img.regular.filename)
    const urlsmall = path.join(__dirname,"../../public/small/" + product.img.small.filename)
     
    await Product_Model.findByIdAndDelete(req.params.id).then(()=>{
      fs.unlinkSync(url)
     fs.unlinkSync(urlsmall)
    })
   
    res.send("Product has been remove from your database")
  
    
   } catch (error) {
      next(error)
   }
}

module.exports = {create,update ,delete_product}