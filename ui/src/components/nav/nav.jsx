import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div className="">
      
        <div className='container mx-auto  '>
             <div className=' flex p-3  items-center '>
                  <div className='text-xl font-bold text-gray-700 items-center'>Brand Name</div>

                  <div className='flex list-none space-x-20 font-semibold px-2 mx-2 items-center ml-20 cursor-pointer text-sm '>
                      
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/shop'>Shop</Link>
                      </li>
                      <li>
                        <Link to='/booknow'>Book Now</Link>
                      </li>
                      <li>
                        <Link to='/'>Review</Link>
                      </li>
                     
                   
                      
                  </div>

                  <div className='ml-auto space-x-3 flex items-center'>
                   <div className='w-8 h-8 p-3 flex items-center justify-center cursor-pointer  hover:bg-orange-400 rounded-full'>
                     <Link to='/cart'>
                     <FontAwesomeIcon icon={faShoppingCart} size='md' color='black' />
                     </Link>
                   </div>
                   <div className='w-8 h-8  p-3 flex items-center justify-center  cursor-pointer hover:bg-orange-400 rounded-full'>
                   <FontAwesomeIcon icon={faUser} size='md' color='black' />
                   </div>
                  </div>
             </div>

          
        </div>
    </div>
  )
}
