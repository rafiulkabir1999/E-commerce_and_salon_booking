const sharp = require('sharp');
const { CreateError } = require('../utils/error');
const path = require('path')

const  resizeImage = async(req, res, next) => {
   
    const url = path.join(__dirname ,"../public/uploads/" + req.file.filename)
    const resize = path.join(__dirname,"../public/small/"+req.file.filename)
   
    try {
      if(!req.file.filename){
        next(CreateError(500,"something went wrong"))
      }
      await sharp(url)
        .resize({
          width: 150,
          height: 150
        })
        .toFile(resize);
        next()
    } catch (error) {
      next(CreateError(500,"something went wrong"))
    }
  }

  module.exports = resizeImage