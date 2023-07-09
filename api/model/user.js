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
    isAmdin:{
        type:Boolean,
        
    },
  },

    {timestamps:true}
);

const User = mongoose.model('user',Model)
module.exports = User