const mongoose = require('mongoose')

const model = mongoose.Schema({
     name:{
        type:String,
        require:true,
     },
     price:{
        type:Number,
        require:true,
     },
     rating:{
        type:String,
     },
     size:{
        type:String,
     },
     color:[String],
     available:{
        type:Boolean
     },
},{timestamps:true})

const Model = mongoose.model("product",model)
module.exports = Model