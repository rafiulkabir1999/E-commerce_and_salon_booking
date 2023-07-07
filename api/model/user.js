const mongoose = require("mongoose")

const Model = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})

const User = mongoose.model('user',Model)
module.exports = User