import React from 'react'

export default function Checkout() {
  return (
    <div className='m-4 shadow-md rounded-md p-6'>
        <h1 className='text-md font-semibold pb-4 text-left'>Total ammount of</h1>
        <div className="flex justify-between flex-col ">
            <div className="flex justify-between ">
                <div>Temporary ammount </div>
                <div>$50</div>
            </div>

            <div className="flex justify-between  border-b-2 pb-4">
                <p>Shipping </p>
                <p>$50</p>
            </div>

           <div className="flex justify-between items-center">
           <h1 className='text-md text-left font-semibold py-4'>Total ammount (including VAT)</h1>
            <p>$100</p>
           </div>

           <button  className='bg-blue-400 rounded-full p-1 text-sm  w-full text-white'>GO TO CHECKOUT</button>
        </div>
    </div>
  )
}
