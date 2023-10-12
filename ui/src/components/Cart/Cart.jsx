import React from 'react'
import CartItem from '../cartItem'
import Checkout from '../checkout'
import Promocode from '../promocode'

export default function Cart() {
  return (
    <div className='container flex mx-auto flex-row pt-6 justify-between'>
      <div className='flex  flex-col space-y-6 px-6 grow'>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      </div>
     
     <div className="ml-10">
      <Checkout/>
      <Promocode/>
     </div>
      

    </div>
  )
}
