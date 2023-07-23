const Reserve = require('../../model/booking.js')
const { CreateError } = require('../../utils/error')


const allReserve =async(req , res , next) => {
    try {
        const all =await Reserve.find({})
        res.send(all)
    } catch (error) {
        next(error)
    }
}

const booking = async(req,res,next) => {
   try {
    const {name,phone , date , beautician , service , time} = req.body
    console.log(phone)
    if(!name || !phone || !date || !beautician || !service || !time){
          next(CreateError(300,'invalid input'))
    }
    const reserve = new Reserve(
        {name:name,
        phone:phone,
        date:date,
        beautician:beautician,
        service:service,
        time:time}
        )
        await reserve.validate()
    await reserve.save()
    res.send(req.body)
   } catch (error) {
      next(error)
   }
}

module.exports = { booking , allReserve}