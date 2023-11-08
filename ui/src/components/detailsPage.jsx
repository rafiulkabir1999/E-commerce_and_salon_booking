import React from 'react'

export default function DetailsPage(props) {

    console.log(props)
  return (
    
       <div className=" w-1/2">
          <div className="">

          </div>
          <div className="">
           <img src={props.details.img.regular.url} alt="" />
          </div>
       </div>


  )
}
