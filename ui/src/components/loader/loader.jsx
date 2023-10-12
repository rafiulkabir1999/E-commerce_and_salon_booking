import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Loader() {
  return (
    <div className="grid grid-cols-3 ">
       

      <div 
      className='flex flex-col grow  overflow-hidden h-80 hover:shadow p-4'>
         
         <div 
        className='w-60 h-2/3 m-4 bg-gray-100 p-5 mx-auto' ></div>

        <div className='flex flex-col  '>
            <p className='text-gray-700 text-sm font-bold'></p>
            <p className='  text-gray-800 text-sm font-bold bg-gray-200 w-20 mx-auto h-5 '></p>
            
            <div  className=''>
            <div className='p-2'>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
            </div>
            
            <button className='bg-gray-400 p-1 px-6 rounded-full font-bold text-gray-500'>Add to Cart</button>
        </div>
        </div>


      </div>

      <div 
      className='flex flex-col grow  overflow-hidden h-80 hover:shadow p-4'>
         
         <div 
        className='w-60 h-2/3 m-4 bg-gray-100 p-5 mx-auto' ></div>

        <div className='flex flex-col  '>
            <p className='text-gray-700 text-sm font-bold'></p>
            <p className='  text-gray-800 text-sm font-bold bg-gray-200 w-20 mx-auto h-5 '></p>
            
            <div  className=''>
            <div className='p-2'>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
            </div>
            
            <button className='bg-gray-400 p-1 px-6 rounded-full font-bold text-gray-500'>Add to Cart</button>
        </div>
        </div>


      </div>

      <div 
      className='flex flex-col grow  overflow-hidden h-80 hover:shadow p-4'>
         
         <div 
        className='w-60 h-2/3 m-4 bg-gray-100 p-5 mx-auto' ></div>

        <div className='flex flex-col  '>
            <p className='text-gray-700 text-sm font-bold'></p>
            <p className='  text-gray-800 text-sm font-bold bg-gray-200 w-20 mx-auto h-5 '></p>
            
            <div  className=''>
            <div className='p-2'>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
            </div>
            
            <button className='bg-gray-400 p-1 px-6 rounded-full font-bold text-gray-500'>Add to Cart</button>
        </div>
        </div>


      </div>

      <div 
      className='flex flex-col grow  overflow-hidden h-80 hover:shadow p-4'>
         
         <div 
        className='w-60 h-2/3 m-4 bg-gray-100 p-5 mx-auto' ></div>

        <div className='flex flex-col  '>
            <p className='text-gray-700 text-sm font-bold'></p>
            <p className='  text-gray-800 text-sm font-bold bg-gray-200 w-20 mx-auto h-5 '></p>
            
            <div  className=''>
            <div className='p-2'>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
            </div>
            
            <button className='bg-gray-400 p-1 px-6 rounded-full font-bold text-gray-500'>Add to Cart</button>
        </div>
        </div>


      </div>


</div>
  )
}
