import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    product:[],
    cart:[],
    text:[]
}



const ProuctSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
      setProduct:(state , action) => {
        state.product = action.payload
       },
       addToCart:(state , action) => {
         state.cart.push(state.product.find( e => e._id === action.payload ))
       },
       removeToCart:(state , action) => {
       const newcart = state.cart.filter( e => e._id !== action.payload)
       state.cart = newcart
       state.text= newcart
       }
    },
   
})

export const { setProduct ,addToCart ,removeToCart} = ProuctSlice.actions
export default  ProuctSlice.reducer