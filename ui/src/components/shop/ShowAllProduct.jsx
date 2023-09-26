import React from 'react'
import Product from '../product/product'
import { useSelector } from 'react-redux'

export default function ShowAllProduct() {
  const {product} = useSelector(state => state.product)
 
  return (
    <div className="grid grid-cols-3 ">
           { product.map(e => {
              console.log(e.img.regular.url)
                return <span className='border-r border-b' >
                         <Product  details={e} url={e.img.regular.url}   />
                       </span>
              })}
    </div>
  )
}
