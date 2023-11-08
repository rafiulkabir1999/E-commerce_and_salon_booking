import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../Reducer/productSlice'

export default function Product(props) {

   const details = props.details || ''
 const dispatch = useDispatch()
 const handleShowingCartButton = (id) => {
    document.getElementById(id).classList.add('h-40')
    document.getElementById(id +"button").classList.remove('hidden')
    
 }
 const handleHidingCartButton = (id) => {
   console.log("mouse move")
    document.getElementById(id).classList.remove('h-40')
    document.getElementById(id +"button").classList.add('hidden')
 }

 //document.getElementById(details._id).addEventListener('mouseenter',(alert("hi")))

  return (
    <div 
    
    className='flex flex-col grow  overflow-hidden h-80 hover:shadow'
    onMouseEnter={()=>handleShowingCartButton(details._id)}
    onMouseLeave={() => handleHidingCartButton(details._id)}
    >
    <Link to={`/product/${details._id}`}>
    <img 
    id={details._id}
    className='w-60 transition duration-150 ease-out p-6 mx-auto'
    src={props.url}//{details.img.regular.url || ""} 
    alt="" />
    </Link>

    <div className='flex flex-col  '>
        <p className='text-gray-700 text-sm font-bold'>{details.name}</p>
        <p className='  text-gray-800 text-sm font-bold '>{details.price}</p>
        
        <div id={details._id + "button"} className=' hidden'>
        <div className='p-2'>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#facc15'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalf} color='#facc15'></FontAwesomeIcon>
        </div>
        
          <button 
          onClick={()=>{dispatch(addToCart(details._id))}}
          className='bg-yellow-400 p-1 px-6 rounded-full font-bold'>Add to Cart</button>
       </div>
    </div>

    
</div>
  )
}
