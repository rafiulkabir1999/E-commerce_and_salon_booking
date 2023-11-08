import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../Reducer/productSlice'
import { useGetProductsQuery } from '../../Reducer/productSliceQ'
import Product from '../product/product'
export default function ShowAllProduct() {

  const dispatch = useDispatch()
  const getQueryParams = () => window.location.search.replace('?', '').split('&')[0]
  const {data ,isLoading ,isSuccess} = useGetProductsQuery()

  

  let product

  useEffect(()=>{
    dispatch(setProduct(data))
   
  })

  const price = getQueryParams().split('=')[1]

    if(price === 'price'){
     product =  data.filter(e => e.price <= JSON.parse(price))
     
    // product = filterData
    }
    else product = data


  return (
    <div className="grid grid-cols-3 ">
           {/* { data && data.map(e => {
              
                return <span className='border-r border-b' >
                         <Product  details={e} url={e.img.regular.url}   />
                       </span>
              })} */}

           {product && product.map(e => {
              
              return <span className='border-r border-b' >
                       <Product  details={e} url={e.img.regular.url}   />
                     </span>
            })}
    </div>
  )
}
