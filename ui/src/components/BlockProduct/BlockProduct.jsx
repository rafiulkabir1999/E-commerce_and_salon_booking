import React from 'react'

export default function BlockProduct() {
  return (
    <div className='container mx-auto flex space-x-6 mt-20'>

        <div className='flex flex-col grow '>
            <p className='font-bold py-4 text-left text-xl'>Recent</p>
            
              <div className='flex items-center p-2 px-6  ml-2'>
                <img 
                className='h-24 w-24 bg-gray-100'
                src="./product/product01.png" alt="" />
                <div className=' font-bold p-4 px-10 text-left'>
                  <p>product name</p>
                  <span className='text-left text-yellow-400'>400$</span>
                </div>

              </div>
        </div>


        <div className='flex flex-col grow '>

              <p className='font-bold py-4 text-left text-xl'>Recent</p>
                  
                  <div className='flex items-center p-2 px-6  ml-2'>
                    <img 
                    className='h-24 w-24 bg-gray-100'
                    src="./product/product01.png" alt="" />
                    <div className=' font-bold p-4 px-10 text-left'>
                      <p>product name</p>
                      <span className='text-left text-yellow-400'>400$</span>
                    </div>

                  </div>

               
        </div>
        <div className='flex flex-col grow  '>
        <p className='font-bold py-4 text-left text-xl'>Recent</p>
                  
                  <div className='flex items-center p-2 px-6  ml-2'>
                    <img 
                    className='h-24 w-24 bg-gray-100'
                    src="./product/product01.png" alt="" />
                    <div className=' font-bold p-4 px-10 text-left'>
                      <p className='font bold'>product name</p>
                      <span className='text-left text-yellow-400'>400$</span>
                    </div>

                  </div>
        </div>

    </div>
  )
}
