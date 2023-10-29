import { faHeart, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeQuantity, removeToCart } from '../../Reducer/productSlice'
import Checkout from '../checkout'
import Promocode from '../promocode'


export default function Cart() {

  const {cart} = useSelector(state => state.product)

  const dispatch = useDispatch();

  return (
    <div className='container flex mx-auto flex-row pt-6 justify-between'>
      <div className='flex  flex-col space-y-6 px-6 grow'>
      {cart.map(e => {
        return <div key={e._id} className='flex justify-between border-b-2'>
        <div className="flex ">
        <img
          className='h-40 w-30 p-4 m-2'
          src={e.img.small.url ? e.img.small.url : ''} alt="images" />
  
          <div className="flex flex-col text-left space-y-2 pt-4">
              <h2  className='text-md  font-bold'>{e.name}</h2>
              <div className="text-gray-500 font-medium text-sm">
              <p>Size : 8.5</p>
              <p>Color: Gray</p>
              </div>
             <div className="space-x-5 flex">
              <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faTrash} color='gray' />
              <button onClick={()=>{dispatch(removeToCart(e._id))}}>remove</button>
              </div>
              
              <div className="flex space-x-2 items-center">
              <FontAwesomeIcon icon={faHeart} color='gray' />
              <button>whitelist</button>
              </div>
  
             </div>
          </div>
        </div>
  
        <div className='flex flex-col pt-6 px-10 '>
          <div className='p-3 text-md font-bold flex items-center'>
          <button  onClick={() => dispatch(removeQuantity(e._id))} className='px-2 py-1 rounded m-1 border cursor-pointer'>
             <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className='p-1'>{e.quantity}</div>
            <button  onClick={() => dispatch(addQuantity(e._id))} className='px-2 py-1 rounded m-1 border cursor-pointer'>
           <FontAwesomeIcon icon={faPlus}/>
            </button>
          </div> 
          <h1 className='text-md font-semibold'>${e.price}</h1>
  
        </div>
      </div>
        })}
      </div>
     
     <div className="ml-10">
      <Checkout/>
      <Promocode/>
     </div>
      

    </div>
  )
}
