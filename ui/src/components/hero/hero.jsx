import React from 'react'
//import hero from '../hero.png'

export default function Hero() {
  return (
    <div className=' '>
        <div className="flex justify-around   ">
              <div className="flex flex-col w-[40%] text-left pl-20 mt-auto mb-auto m-4">
                 <h1 className='text-6xl pt-4 weight-900'>Unleash Your Inner Elegance</h1>
                
                 <p className='text-sm py-4 w-3/4'>Enhance your natural beauty with our exquisite products and indulge in our expert salon services for a transformative and rejuvenating experience.</p>

                 <div className='flex space-x-6 pt-10'>
                    <button className='px-8 py-2 bg-blue-400 text-white rounded-full'> BUY NOW</button>
                    <button className='px-8 py-2 bg-blue-400 text-white rounded-full'> BOOK NOW</button>
                 </div>
              </div>

              <div className="p-6 m-4">
                <img 
                className='w-[500px]'
                src='./hero.png' alt="" />
              </div>
        </div>

       <div className=' container mx-auto flex space-x-6 mt-10'>
          <div className='flex p-4  bg-gradient-to-r from-green-200 via-green-300 to-green-200 rounded-[30px] grow overflow-hidden'>
           <div className='flex flex-col text-left p-4'>
               <h2 className="text-md font-bold">Fresh Cream</h2>
               <p className='text-gray-500 py-2'>this product is awesome</p>
               <p className="mt-auto text-gray-600 font-bold hover:text-gray-700 cursor-pointer">see more</p>
           </div>
           
            <img 
            className='w-60 ml-auto'
            src="./images/option01.png" alt="" />
          </div>

          <div className='flex p-4  bg-gradient-to-r from-[#f8e8e0] via-[#eac9b9] to-[#ffe7dc] rounded-[30px] grow overflow-hidden'>
            
              <div className='flex flex-col text-left p-4'>
                  <h2 className="text-md font-bold">Fresh Cream</h2>
                  <p className='text-gray-500 py-2'>this product is awesome</p>
                  <p className="mt-auto text-gray-600 font-bold hover:text-gray-700 cursor-pointer">see more</p>
              </div>
                
                <img 
                className='w-60 ml-auto'
                src="./images/option02.png" alt="" />
          </div>

          <div className='flex p-4  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-[30px] grow'>
            
          <div className='flex flex-col text-left p-4'>
               <h2 className="text-md font-bold">Fresh Cream</h2>
               <p className='text-gray-500 py-2'>this product is awesome</p>
               <p className="mt-auto text-gray-600 font-bold hover:text-gray-700 cursor-pointer">see more</p>
           </div>
            
            <img 
            className='w-60 ml-auto'
            src="./images/option03.png" alt="" />
          </div>
         
       </div>

    </div>
  )
}
