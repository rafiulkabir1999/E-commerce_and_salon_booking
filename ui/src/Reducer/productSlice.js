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
      show:(state=initialState,action) => {

      },
    },
    extraReducers:(builder) => {
     builder.addCase(Display_product.fulfilled,(state,action) => {
        console.log(action.payload)
        state.product = action.payload
     })
    }
})

export const { show } = ProuctSlice.actions
export default  ProuctSlice.reducer