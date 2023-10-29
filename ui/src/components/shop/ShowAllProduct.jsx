import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../Reducer/productSlice'
import { useGetProductsQuery } from '../../Reducer/productSliceQ'
import Product from '../product/product'
export default function ShowAllProduct() {

  const dispatch = useDispatch()
  const {data ,isLoading ,isSuccess} = useGetProductsQuery()
  useEffect(()=>{
    dispatch(setProduct(data))
   console.log('hi',isLoading)
  })
 
  return (
    <div className="grid grid-cols-3 ">
           {data && data.map(e => {
              
                return <span className='border-r border-b' >
                         <Product  details={e} url={e.img.regular.url}   />
                       </span>
              })}
    </div>
  )
}
