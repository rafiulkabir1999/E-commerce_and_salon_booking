import axios from "axios";
const Localhost = 'http://localhost:4000'



const register=async(userdata)=>{
    const response = await axios.post(Localhost+"/user/signup",userdata)
    return response.data
}

const login = async(data) =>{
    const response = await axios.post(Localhost+"/user/login",data,{withCredentials:true})
    return response.data
}



const userRegister={
    register,
    login
}

export default userRegister;