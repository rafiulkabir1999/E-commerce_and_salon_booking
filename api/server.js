const dotenv = require( 'dotenv')

const express = require( 'express')
const bodyParser = require( 'body-parser')
const mongoose = require( 'mongoose')
const cors = require( 'cors')
const userRouter = require( './routes/user.js')
//const AdminRouter = require( './routes/admin.js')
//const Product = require( './routes/product.js')
const path  = require( 'path')
//const cookieParser = require( 'cookie-parser')
//const orderController = require( './controller/product/product.js')
const app =express()


dotenv.config();


app.use('/photo', express.static('uploads'));


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

 
app.get('/',(req,res)=>{
    console.log("Hello world")
    res.send("App  is RUnning")
})

app.use('/user',userRouter)
//app.use('/admin',AdminRouter)
//app.use('/product',Product)
//app.use('/user',userRouter)


//app.use('/order',orderController)




const CONNECTION_URL='mongodb://localhost:27017/shop'
const PORT =process.env.PORT || 4000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log("server Running on port 4000"))
    )
    .catch((error)=>console.log(error))

