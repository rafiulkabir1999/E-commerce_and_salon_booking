import {configureStore, getDefaultMiddleware}  from '@reduxjs/toolkit'
//import  counterSlice  from './cartReducer';
import  userSlice from './userSlice'
import productSlice from './productSlice'
//import  UserLogin from './loginSlice'
//import  UploadProduct from './productSlice'
import { apiSlice } from './apiSlice'
import authSlice from './authSlice'




export const store = configureStore({
    reducer:{
       // cart: counterSlice,
       [apiSlice.reducerPath]:apiSlice.reducer,
        user: userSlice,
        product:productSlice,
        authSlice:authSlice
       // product:UploadProduct,
       // login:UserLogin
        
    },

    middleware:(getDefaultMiddleware)  => 
      getDefaultMiddleware().concat(apiSlice.middleware)
    
  })