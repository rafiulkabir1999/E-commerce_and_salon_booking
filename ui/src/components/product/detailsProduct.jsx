import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../Reducer/productSliceQ'
import DetailsPage from '../detailsPage'
import Loader from '../loader/loader'
export default function DetailsProduct() {

  const {id} = useParams() 
  const {data,isLoading ,isSuccess} = useGetProductByIdQuery(id)

  let content 

  if (isLoading){
    content = <Loader/>
  }

  if(isSuccess){
    content = <DetailsPage details={data}/>
  }
 
  return (
    <div className='container mx-auto flex'>
    
       
    {content}

       

    </div>
  )
}
