const multer = require("multer")
const { CreateError } = require("../utils/error")
const sharp = require("sharp")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/' )
    },

    filename: function (req, file, cb) {
        
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                const ext = file.originalname.split('.')
                const fileName = file.fieldname + '-' + uniqueSuffix + "." + ext[ext.length - 1]
                cb(null, fileName)

      }
    })



const upload = multer({
     storage: storage ,
     limits:{
       fileSize:50000000,
     },

    fileFilter:(req,file,cb) => {
        if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
         cb(null,true)
        }
        else if(file.size > 1024*1000*5){
            cb(null,true)
           }
        else{
         cb(CreateError(500,"Upload only Image File"))
        }
     },
}
   
)

module.exports = upload