import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export default function Booknow() {
  return (
    <div className='container mx-auto'>
        <div className='flex '>
            <div className='w-1/5 h-screen  block border-r mt-6'>
                 <div className='flex'>
                        <span className='w-8'>
                        <FontAwesomeIcon icon={faCalendarCheck}/>
                      </span>
                      <div className='flex items-center justify-between grow '>
                            <p className='font-semibold'>BOOK NOW</p>
                            <p className='text-xs text-gray-400 font-bold pr-4'>10</p>
                      </div>
                 </div>

                 <div className='flex mt-3'>
                        <span className='w-8'>
                        <FontAwesomeIcon icon={faCalendarCheck}/>
                      </span>
                      <div className='flex items-center justify-between grow '>
                            <p className='font-semibold'>Cancle Booking</p>
                            <p className='text-xs text-gray-400 font-bold pr-4'>10</p>
                      </div>
                 </div>

                <div className=''>

                </div>
            </div>


            <div className='flex flex-col space-y-6 w-2/3 ml-10 '>
              <p className='font-bold text-xl text-gray-500 text-left py-6'>Reserve Your Time</p>
              <div className='flex  space-x-6  w-full  '>
                    <div className='border rounded flex flex-col relative p-2  grow'>
                            <label htmlFor=""
                            className='absolute -top-3  bg-white  px-3 cursor-pointer font-bold  text-gray-500'>Name</label>
                            <input 
                            className=' outline-none px-3 font-bold p-2'
                            type="text"  />
                    </div>


                    <div className='border rounded flex flex-col relative p-2  grow '>
                            <label htmlFor=""
                            className='absolute -top-3  bg-white  px-3 cursor-pointer font-bold  text-gray-500'>Phone</label>
                            <input 
                            className=' outline-none px-3 font-bold p-2'
                            type="text"  />
                    </div>



                

              </div>

              
              {/*SELECET TIME DATE AND */}
              <div className='flex items-center space-x-6 w-full'>

                    <div className='relative p-2 border rounded grow'>
                           <div className='absolute bg-white p-1 -top-4 font-bold text-gray-500 px-2'>
                              Choose One
                           </div>
                        <select
                        className='w-full p-2  outline-none  rounded  font-bold '
                        name="" id="">
                            <option value="">Select your Service</option>
                            <option value="">option one</option>
                            <option value="this is ofton">option one</option>
                            <option value="">option one</option>
                            <option value="">option one</option>
                            <option value="">option one</option>
                        </select>
                    </div>

                    <div>
                        <input 
                        className='py-4 outline-none border rounded px-2 '
                        type="date" />
                    </div>

                    </div>




                <div>
  
                    <div className='relative p-2 border rounded grow'>
                           <div className='absolute bg-white p-1 -top-4 font-bold text-gray-500 px-2'>
                              Select Beautcian
                           </div>
                        <select
                        className='w-full p-2 font-bold outline-none  rounded  font-bold '
                        name="" id="">
                            <option  value="">option one</option>
                            <option value="">option one</option>
                            <option value="this is ofton">option one</option>
                            <option value="">option one</option>
                            <option value="">option one</option>
                            <option value="">option one</option>
                        </select>
                    </div>
               </div>

               <div className='grid grid-cols-6 gap-4 w-[20%]'>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  <div className='w-10 relative'>
                   <div className='w-6 h-6 bg-gray-400 rounded cursor-pointer mx-auto'></div>
                   <span className='text-[10px] font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>9</span>
                  </div>
                  
               </div>

          <button className='p-2 texts-white font-bold rounded  bg-blue-300 text-white'>Confirm Booking</button>

            </div>

        </div>
    </div>
  )
}
