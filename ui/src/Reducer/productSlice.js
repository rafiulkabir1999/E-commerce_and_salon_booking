import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify'


const initialState = {
    product:[],
    cart:[],
    
}



const ProuctSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
       setProduct:(state , action) => {
        state.product = action.payload
       },
       addToCart:(state , action) => {
       
        if(!state.cart.find(e => e._id === action.payload)){
          let cartItem = state.product.find( e => e._id === action.payload)
          cartItem.quantity = 1 ;
          state.cart.push(cartItem)
          toast.info("Product has been added to the cart",{position:"bottom-left"})
        }
       },
       removeToCart:(state , action) => {
      
       state.cart = state.cart.filter( e => e._id !== action.payload)
       toast.info('Product remove from cart',{position:'bottom-left'})
       },
       addQuantity: (state, action) => {
       state.cart.map((e,index) => {
        if(e._id === action.payload && state.cart[index].quantity < 10){
          state.cart[index].quantity = state.cart[index].quantity + 1;
        }
       })
       },
       removeQuantity: (state,action) => {
        state.cart.map((e,index) => {
          if(e._id === action.payload && state.cart[index].quantity > 1){
            state.cart[index].quantity = state.cart[index].quantity - 1;
          }
         })
       }
    },
   
})

export const { setProduct ,addToCart ,removeToCart ,addQuantity ,removeQuantity} = ProuctSlice.actions
export default  ProuctSlice.reducer