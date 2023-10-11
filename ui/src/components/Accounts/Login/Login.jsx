import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userLogin } from '../../../Reducer/userSlice'
import {useDispatch} from 'react-redux'
import { useLoginMutation } from '../../../Reducer/userSliceQ'
import {toast} from "react-toastify"
import { setCredentials } from '../../../Reducer/authSlice'

export default function Login() {


const [login , {isLoading}] = useLoginMutation()
 const dispatch = useDispatch();
 const [userinfo,setuserinfo] = useState({
  phone:'',
  password:''
 })

 const handleChange = (e) =>{
  setuserinfo(state=>{
    return{  ...state,[e.target.name]:e.target.value}
  })
 }
 const handelSubmit = async(e)=>{
  e.preventDefault();
try {
  const res = await login(userinfo).unwrap()
  dispatch(setCredentials({ ...res }));
} catch (err) {
  toast.error(err?.data?.message || err.error);
}
   
 }
 

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={handelSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                      onChange={handleChange}
                      type="text" name="phone" id="phone" value={userinfo.phone} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+880" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      onChange={handleChange}
                      type="password" name="password" id="password" value={userinfo.password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <div href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                       <Link to='/signup'>Sign up</Link> 
                        </div>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
