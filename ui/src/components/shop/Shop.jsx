import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ByCetegory from './ByCetegory'
import ShowAllProduct from './ShowAllProduct'
export default function Shop() {


const {cetegory} = useParams();
//const [getProducts , { Loading }] = useGetProductsMutation()


//console.log(cetegroy)

 const selectColor = (id) => {
  document.getElementById(id).classList.toggle('hidden')
 }


console.log(cetegory)


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
              <Link to='/product/Electronics' >Electronics</Link>
              <Link to='/product/Phone' >Phone</Link>
              <Link to='/product/Cosmecits' >Cosmecits</Link>
              <Link to='/product/Bag' >Bag</Link>
              <Link to='/product/Food' >Food</Link>
             
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

                <div className='p-4 flex flex-col space-y-6'>
                  <div className='flex text-right font-bold text-xs '>
                      <div className='grow border-green-500 border-b-4 py-1 ' >500</div>
                      <div className='grow border-orange-500 border-b-4 py-1' >1k</div>
                      <div className='grow border-yellow-500 border-b-4 py-1' >1k</div>
                      <div className='grow border-pink-500 border-b-4 py-1' >2k</div>
                      <div className='grow border-purple-500 border-b-4 py-1' >5k</div>
                  </div>
                    <input
                      type="range"
                      className="bg-blue-200 p-2  h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                      min="0"
                      max="5"
                      id="customRange2" />

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
