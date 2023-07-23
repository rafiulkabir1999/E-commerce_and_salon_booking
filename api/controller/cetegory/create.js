const { CreateError } = require("../../utils/error")

const createCetegory = (req,res,next) => {
    try {
        res.send(req.body)
    } catch (error) {
        next(CreateError(500,'something went wrong'))
    }
}

module.exports = { createCetegory }