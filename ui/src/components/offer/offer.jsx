import React from 'react'

export default function Offer() {
  return (
    <div className='container mx-auto mt-10'>
        <div className='flex space-x-6'>
             
                        <div className='flex p-4  bg-gradient-to-r from-green-200 via-green-300 to-green-200 rounded-[30px] w-[60%] overflow-hidden'>
                                <div className='flex flex-col text-left p-4'>
                                    <h2 className="text-md font-bold">Fresh Cream</h2>
                                    <p className='text-gray-500 py-2'>this product is awesome</p>
                                    <p className="mt-auto text-gray-600 font-bold hover:text-gray-700 cursor-pointer">see more</p>
                                </div>
                                
                                    <img 
                                    className='w-60 ml-auto'
                                    src="./images/option01.png" alt="" />
                    </div>
              

              <div className='flex flex-col w-[40%] space-y-6'>

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

              </div>
        </div>

    </div>
  )
}
