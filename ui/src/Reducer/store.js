import {configureStore}  from '@reduxjs/toolkit'
//import  counterSlice  from './cartReducer';
import  userSlice from './userSlice'
import productSlice from './productSlice'
//import  UserLogin from './loginSlice'
//import  UploadProduct from './productSlice'




export const store = configureStore({
    reducer:{
       // cart: counterSlice,
        user: userSlice,
        product:productSlice,
       // product:UploadProduct,
       // login:UserLogin
        
    },
  })