const multer = require("multer")
const { CreateError } = require("../utils/error")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/' )
    },
    
    filename: function (req, file, cb) {
      
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            const ext = file.originalname.split('.')
            cb(null, file.fieldname + '-' + uniqueSuffix + "." + ext[ext.length - 1])
        
        //cb(null,CreateError(500,"please uload image/png/jeg/jpeg only and less then 5 mb"))
      }
    })

    const upload = multer({ storage: storage })

module.exports = upload