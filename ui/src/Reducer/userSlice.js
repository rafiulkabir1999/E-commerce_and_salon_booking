import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import User from '../api/userServices.js'


const initialState={
    user:"",
    loading:false,
    error:false,
    success:false,
    message:'',

    loginloading:false,
    loginerror:false,
    loginsuccess:false,
    loginmessage : '',
    loginuser:{
       name:null,
       phone:null,
       type:null,
    }
}

export const Register=createAsyncThunk('user/Register',async(user,thunkAPI)=>{
    try {
          const response=await User.register(user)
          console.log(response)
          return response;
    
        

    } catch (error) {
        const message=(error.response && error.response.data &&error.response.data.message)||
             error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const Login = createAsyncThunk('user/Login',async(data,thunkAPI) => {

    return await User.login(data)


})

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        reset:(state=initialState,action)=>{
            state.loading=false
            state.error=false
            state.success = false
            state.message=''

        },

    },
    extraReducers:(builder)=>{
        builder.addCase(Register.pending,(state,action)=>{
            state.loading=true
            state.success=false
          })
        builder.addCase(Register.fulfilled,(state,action)=>{
                   state.loading=false
                   state.success=true
                   state.error=false
                   state.message=action.payload
               })
        builder.addCase(Register.rejected,(state,action)=>{
                state.loading=false
                state.error=true
                state.loading=false
                state.message=action.payload
                
               })


    }
})

export const {reset,add}=userSlice.actions
export default userSlice.reducer