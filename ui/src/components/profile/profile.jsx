import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../Reducer/userSlice';
import { logout } from '../../Reducer/authSlice';
import { toast } from 'react-toastify';

export default function Profile() {
 const dispatch = useDispatch();
 const Navigate = useNavigate()
 const Logout = () => {
  try {
    console.log('called')
    dispatch(logout())
    Navigate(['/login'])
  } catch (err) {
    toast.error(err?.data?.message || err.error)
  }
 }

  return (
    <div>
        <p>this is profile</p>
        <button 
        onClick={Logout}
        className='p-2 bg-red-400 text-white rounded-md m-4 px-4 hover:bg-red-600'>Log out</button>
    </div>
  )
}
