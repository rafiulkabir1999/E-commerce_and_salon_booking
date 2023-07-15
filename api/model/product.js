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
        type:Number,
     },
     size:{
        type:String,
     },
     color:String,
     available:{
        type:Boolean
     },
     img:{
      regular:{
        filename:String,
        url:String
      },
      small:{
         filename:String,
        url:String
      },
      extrasmall:{
         filename:String,
        url:String
      }
     }
},{timestamps:true})

const Model = mongoose.model("product",model)
module.exports = Model