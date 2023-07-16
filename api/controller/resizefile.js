const sharp = require('sharp');
const { CreateError } = require('../utils/error');
const path = require('path')

const  resizeImage = async(file) => {
   
    const url = path.join(__dirname ,"../public/uploads/" +  file.filename)
    const resize = path.join(__dirname,"../public/small/"+ file.filename)
   
    try {
      if(!file.filename){
        return CreateError(500,"something went wrong")
      }
      await sharp(url)
        .resize({
          width: 150,
          height: 150
        })
        .toFile(resize);
       
    } catch (error) {
       return CreateError(500,"something went wrong")
    }
  }

  module.exports = resizeImage