const mongoose = require('mongoose')

const Model = mongoose.Schema({
  name:{
    type:String,
    required: true 
  },
  phone: {
    type : String,
    unique: true,
    required : true,
    
  },
  beautician:{
    type: String,
    required : true
  },
  date:{
    type : String,
    required : true
  },
  service : {
    type : String,
    required : true
  },
  time : {
    type :String,
    required : true
  }
},{timestamps : true, }
)

Model.path('email').validate(async() => {
 return false
},'Email is already existed')

const Booking = mongoose.model('reserve',Model)


module.exports = Booking