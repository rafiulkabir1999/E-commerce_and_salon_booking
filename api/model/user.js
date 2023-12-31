const mongoose = require("mongoose")

const Model = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    },
  },

    {timestamps:true}
);

const User = mongoose.model('user',Model)
module.exports = User