import React from 'react'

export default function Promocode() {
  return (
    <div className='p-5'>
        <h2 className='text-md font-medium text-gray-400 text-left py-3'>Apply promo code</h2>
        <div className="flex space-x-2 items-center">
            <input 
            className='outline-none w-full p-2 border rounded'
            type="text" />
            <p className='text-blue-500  text-md'>APPLY</p>
        </div>
    </div>
  )
}
