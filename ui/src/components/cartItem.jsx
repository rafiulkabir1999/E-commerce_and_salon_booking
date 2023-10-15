import { faHeart, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../Reducer/productSlice'

export default function CartItem(props) {


const dispatch = useDispatch();
const [details , setdetails] = useState(props.details)
  return (
    <div className='flex justify-between border-b-2'>
      <div className="flex ">
      <img
        className='h-40 w-30 p-4 m-2'
        src={details.img.small.url ? details.img.small.url : ''} alt="images" />

        <div className="flex flex-col text-left space-y-2 pt-4">
            <h2  className='text-md  font-bold'>{details.name}</h2>
            <div className="text-gray-500 font-medium text-sm">
            <p>Size : 8.5</p>
            <p>Color: Gray</p>
            </div>
           <div className="space-x-5 flex">
            <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faTrash} color='gray' />
            <button onClick={()=>{dispatch(removeToCart(details._id))}}>remove</button>
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
        <span className='px-2 py-1 rounded m-1 border cursor-pointer'>
           <FontAwesomeIcon icon={faMinus} />
          </span>
          <div className='p-1'>1</div>
          <span className='px-2 py-1 rounded m-1 border cursor-pointer'>
         <FontAwesomeIcon icon={faPlus}/>
          </span>
        </div> 
        <h1 className='text-md font-semibold'>${details.price}</h1>

      </div>
    </div>
  )
}
