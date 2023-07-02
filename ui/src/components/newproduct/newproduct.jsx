import React from 'react'
import Product from '../product/product'

export default function Newproduct() {
  return (
    <div className='container mx-auto mt-10'>
        <div className="flex justify-between py-4 px-1">
             <h2 className='text-xl font-bold text-gray-600  '>New Product</h2>

             <div className="flex space-x-10 font-bold text-gray-700">
                <div className="bg-yellow-500 rounded-full p-1 px-7 items-center">All</div>
                <span>|</span>
                <div className="">Top 20</div>
                <span>|</span>
                <div className="">Best Sell</div>
                <span>|</span>
                <div className="">Favourite</div>
             </div>
        </div>


        <div className=" flex space-x-6">
           <Product id="1" /> 
           <Product id='2' />
           <Product id='3' />
           <Product id='4' />
           <Product id='5' />
        </div>

    </div>
  )
}
