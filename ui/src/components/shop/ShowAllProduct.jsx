import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../product/product'

export default function ShowAllProduct() {
  const {product} = useSelector(state => state.product)
 
  return (
    <div className="grid grid-cols-3 ">
           {product && product.map(e => {
              
                return <span className='border-r border-b' >
                         <Product  details={e} url={e.img.regular.url}   />
                       </span>
              })}
    </div>
  )
}
