import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ByCetegory from './ByCetegory'
import ShowAllProduct from './ShowAllProduct'
export default function Shop() {

const navigate = useNavigate()
const {cetegory , price , size} = useParams();
//const [getProducts , { Loading }] = useGetProductsMutation()

const [getquery, setquery] = useState({price:1,color:'',size:0})

//console.log(cetegroy)
//Filter Color
 const selectColor = (color) => { 
 document.getElementById(color).classList.toggle('hidden')
 navigate(`?color=${color}`)
  
 }

//filter Price 
const filterSearch = (e) => {
  setquery( {
    ...getquery,
    price:e.target.value
   
  } )
navigate( `?price=${(e.target.value) * 500}`)
}


  return (
    <div className='container mx-auto'>
      <div className='flex grow   border  text-left font-semibold text-gray-600 '>
        <div className='border-r  w-full'>
          <p className=' p-4'>Filters</p>
        </div>
        <div className='border-r w-full '>
        <p className='pl-8 p-4'>Filter</p>
        </div>
        <div className='border-r w-full'>
        <p className='pl-8 p-4'>Filter</p>
        </div>
        <div className='border-r w-full'>Filter</div>
      </div>


      <div className='flex h-[95%]'>
        <div className='w-1/4 block  border-r'>

     {/*Cetegory*/}      
           
      <div>
            <div className='flex pt-4'>
              <span className='w-8'>
                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </span>
              <div className='flex items-center justify-between grow '>
                    <p className='font-semibold'>CETEGORY</p>
                    <p className='text-xs text-gray-400 font-bold pr-4'>10</p>
              </div>
            </div>

            <div className='list-none flex flex-col text-left space-y-4 pt-4 font-semibold px-8'>
              <Link to='/products/Electronics' >Electronics</Link>
              <Link to='/products/Phone' >Phone</Link>
              <Link to='/products/Cosmecits' >Cosmecits</Link>
              <Link to='/products/Bag' >Bag</Link>
              <Link to='/products/Food' >Food</Link>
             
            </div>
       </div>

   {/*Price*/}      
          <div className='pt-4 mt-6 bg-gray-50 pb-4 '>
              <div className='flex  '>
                  <span className='w-8'>
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  </span>
                  <div className='flex items-center  justify-between grow'>
                        <p className='font-semibold'>PRICE</p>

                        
                  </div>
                </div>

                <div className='p-6 flex flex-col py-2 m-2 space-y-2'>
                  <div className='flex text-right font-bold text-xs '>
                      <div className='grow border-green-500 border-b-8 py-1 rounded-l  ' >1000</div>
                      <div className='grow border-orange-500 border-b-8 py-1 ' >1500</div>
                    
                      <div className='grow border-pink-500 border-b-8 py-1 rounded-r' >2000</div>
                      
                  </div>
                    <input
                      onChange={filterSearch}
                      type="range"
                      className="bg-blue-200    w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                      min="1"
                      max="4"
                      id="customRange2"
                      value={getquery.price}
                      />

                </div>
          </div>

{/*Colors*/}
<div className='pb-4'>
              <div className='flex pt-4'>
                  <span className='w-8'>
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  </span>
                  <div className=' '>
                        <p className='font-semibold'>COLORS</p>
                        
                  </div>
                </div>

<div className='px-8 py-4'>
                  <div className='grid grid-cols-8 '>
                  
                      <div 
                      onClick={()=>selectColor("RED")}
                      className='w-5 h-5 bg-red-400 rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='RED'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>

                      <div 
                      onClick={()=>selectColor("YELLOW")}
                      className='w-5 h-5 bg-yellow-400 rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='YELLOW'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>
                      <div 
                      onClick={()=>selectColor("green")}
                      className='w-5 h-5 bg-green-400 rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='green'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>
                      <div 
                      onClick={()=>selectColor("pink")}
                      className='w-5 h-5 bg-pink-400 rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='pink'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>
                      <div 
                      onClick={()=>selectColor("orange")}
                      className='w-5 h-5 bg-orange-400 rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='orange'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>
                      <div 
                      onClick={()=>selectColor("black")}
                      className='w-5 h-5 bg-black rounded-full p-2 relative cursor-pointer'>
                        <div 
                        id='black'
                     
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hidden'>
                           <FontAwesomeIcon icon={faCheck} color='white' size='xs'></FontAwesomeIcon>
                        </div>
                      </div>
                      
                    </div>
</div>

</div>

{/*Size*/}

<div className='  pt-4'>
                <div className='flex'>
                    <span className='w-8'>
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                      </span>
                      <div className=' '>
                            <p className='font-semibold'>SIZE</p>
                            
                      </div>
                </div>


                <div className='grid grid-cols-6 gap-2 px-8 py-4 '>
                  <div className='border w-8 h-8 items-center flex items-center text-center justify-center'>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>
                  <div className='border w-8 h-8 items-center '>8</div>

                </div> 
</div>

<button className='bg-blue-400 py-2 w-full text-white font-bold mt-10'>SEARCH</button>


        </div>
        


      <div className='grow block'>
           

          
                
             {cetegory ? <ByCetegory cetegory={cetegory}/> : <ShowAllProduct/>
             }
                 
           
      </div>

      </div>
    </div>
  )
}
