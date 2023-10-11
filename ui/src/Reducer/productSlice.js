import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productServices from "../api/productServices"


const initialState = {
    product:[]
}

export const Display_product = createAsyncThunk('product/Display_product',async(state,thunkAPI) => {
  try {
   const response = await productServices.getproduct();
   return response.data
  } catch (error) {
    const message=(error.response && error.response.data &&error.response.data.message)||
    error.message||error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

const ProuctSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
      setProduct:(state , action) => {
        state.product = action.payload
       }
    },
    extraReducers:(builder) => {
     builder.addCase(Display_product.fulfilled,(state,action) => {
        console.log(action.payload)
        state.product = action.payload
     })
    }
})

export const { setProduct } = ProuctSlice.actions
export default  ProuctSlice.reducer