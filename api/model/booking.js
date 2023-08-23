const mongoose = require('mongoose')


// const phoneSchema =  mongoose.Schema({
//     type: String,
//     match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter a valid phone number']

// })

const Model = mongoose.Schema({
  name:{
    type:String,
    required: true 
  },
  phone: {
    type :String,
    index:true,
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

// Model.path('email').validate(async() => {
//  return false
// },'Email is already existed')

const Booking = mongoose.model('reserve',Model)


module.exports = Booking