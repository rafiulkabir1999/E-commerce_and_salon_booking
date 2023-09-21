import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {

   const details = props.details || ''
   //const img = details.img.regular.url || ''
   //console.log(img)
 //const details = details.e;
 const handleShowingCartButton = (id) => {
    document.getElementById(id).classList.add('h-40')
    document.getElementById(id +"button").classList.remove('hidden')
    
 }
 const handleHidingCartButton = (id) => {
    document.getElementById(id).classList.remove('h-40')
    document.getElementById(id +"button").classList.add('hidden')
 }

  return (
    <div 
    className='flex flex-col grow  overflow-hidden h-80 hover:shadow'
    onMouseOver={()=>handleShowingCartButton(details._id)}
    onMouseLeave={() => handleHidingCartButton(details._id)}
    >
    <img 
    id={details._id}
    className='w-60 transition duration-150 ease-out p-6 mx-auto'
    src={details.img.regular.url} alt="" />

    <div className='flex flex-col  '>
        <p className='text-gray-700 text-sm font-bold'>{details.name}</p>
        <p className='  text-gray-800 text-sm font-bold '>400$</p>
        
        <div id={details._id + "button"} className=' hidden'>
        <div className='p-2'>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
        </div>
        
          <button className='bg-yellow-400 p-1 px-6 rounded-full font-bold'>Add to Cart</button>
       </div>
    </div>

    
</div>
  )
}
