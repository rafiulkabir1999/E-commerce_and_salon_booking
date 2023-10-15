import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../cartItem'
import Checkout from '../checkout'
import Promocode from '../promocode'

export default function Cart() {

  const cart = useSelector(state => state.product.cart)

  return (
    <div className='container flex mx-auto flex-row pt-6 justify-between'>
      <div className='flex  flex-col space-y-6 px-6 grow'>
      {cart.map(e => {
        return  <CartItem key={e._id} details={e} />
        })}
      </div>
     
     <div className="ml-10">
      <Checkout/>
      <Promocode/>
     </div>
      

    </div>
  )
}
