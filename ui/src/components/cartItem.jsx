import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CartItem() {
  return (
    <div className='flex justify-between border-b-2'>
      <div className="flex ">
      <img
        className='w-40 p-4 m-2'
        src="./images/option01.png" alt="images" />

        <div className="flex flex-col text-left space-y-2 pt-4">
            <h2  className='text-md  font-bold'>Shampoo for Hair Growth</h2>
            <div className="text-gray-500 font-medium text-sm">
            <p>Size : 8.5</p>
            <p>Color: Gray</p>
            </div>
           <div className="space-x-5 flex">
            <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faTrash} color='gray' />
            <button>remove</button>
            </div>
            
            <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faHeart} color='gray' />
            <button>whitelist</button>
            </div>

           </div>
        </div>
      </div>

      <div className='flex flex-col pt-6'>
        <div className='p-3 text-md font-bold'>
        <>1</>
        </div> 
        <h1 className='text-md font-semibold'>$200</h1>

      </div>
    </div>
  )
}
