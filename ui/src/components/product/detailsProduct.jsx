import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../Reducer/productSliceQ'
import Loader from '../loader/loader'

export default function DetailsProduct() {

  const {id} = useParams() 
  const {data,isLoading ,isSuccess} = useGetProductByIdQuery(id)

  let content 

  if (isLoading){
    content = <Loader/>
  }

  if(isSuccess){
    content =  `<div className=" w-1/2">
          <div className="">

          </div>
          <div className="">
           <img src={data.img.regular.url} alt="" />
          </div>
       </div>`
  }
 
  return (
    <div className='container mx-auto flex'>
    
       
    <content/>

       

    </div>
  )
}
