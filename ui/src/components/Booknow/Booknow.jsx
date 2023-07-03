import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export default function Booknow() {

  const [reserve,setReserve] = useState({
    name:'',
    phone:'',
    beautician:'',
    service:'',
    date:'',
    time:''

  })
  const handleForm = (data)=> {
   

      setReserve(  {
        
        ...reserve, [data.target.name]:[data.target.value]
         
       })
    
       
  }
  const onsubmit =(e) => {
   e.preventDefault()
    const name = document.getElementById('NAME')
    const phone = document.getElementById('PHONE')
    const Time = document.getElementById("TIME")

    if(reserve.name[0].length > 20 ){
      name.classList.add('border-red-400')
      
    }

   else if( reserve.phone[0].length > 11){
      phone.classList.add('border-red-400')
    }
   else if(reserve.time.length == 0){
      Time.classList.add('border-2')
    }
   else {
    name.classList.remove('border-red-400')
    phone.classList.remove('border-red-400')
    Time.classList.remove('border-2')
    console.log(reserve)// console.log(reserve)
  console.log(reserve.time.length)
   }
 
  }

  const selectTime = (id) => {
     document.getElementById('9-10').classList.remove("bg-red-800")
     document.getElementById('10-11').classList.remove("bg-red-800")
     document.getElementById('11-12').classList.remove("bg-red-800")
     document.getElementById('12-1').classList.remove("bg-red-800")
     document.getElementById('2-3').classList.remove("bg-red-800")
     document.getElementById('3-4').classList.remove("bg-red-800")
    
    document.getElementById(id).classList.add('bg-red-800')
  }

  return (
    <div className='container mx-auto'>
        <div className='flex '>
            <div className='w-1/5 h-screen  block border-r mt-6'>
                 <div className='flex'>
                        <span className='w-8'>
                        <FontAwesomeIcon icon={faCalendarCheck}/>
                      </span>
                      <div className='flex items-center justify-between grow '>
                            <p className='font-semibold'>BOOK NOW</p>
                            <p className='text-xs text-gray-400 font-bold pr-4'>10</p>
                      </div>
                 </div>

                 <div className='flex mt-3'>
                        <span className='w-8'>
                        <FontAwesomeIcon icon={faCalendarCheck}/>
                      </span>
                      <div className='flex items-center justify-between grow '>
                            <p className='font-semibold'>Cancle Booking</p>
                            <p className='text-xs text-gray-400 font-bold pr-4'>10</p>
                      </div>
                 </div>

                <div className=''>

                </div>
            </div>


            <form onSubmit={onsubmit}  className='flex flex-col space-y-6 w-2/3 ml-10 '>
              <p className='font-bold text-xl text-gray-500 text-left py-6'>Reserve Your Time</p>
                  <div className='flex  space-x-6  w-full font-medium text-blue-400 '>
                        <div id="NAME" className='border-2   rounded flex flex-col relative p-2  grow'>
                                <label htmlFor="name"
                                className='absolute -top-3  bg-white  px-3 cursor-pointer border rounded  border shadow '>Name</label>
                               
                                <input 
                                onChange={handleForm}
                                id='name'
                                name='name'
                                value={reserve.name}
                                className=' outline-none text-black  px-3 p-2'
                                type="text" 
                                placeholder='ex: Md Ali ' required />

                        </div>


                        <div id="PHONE" className='border-2 rounded  flex flex-col relative p-2  grow '>
                                <label htmlFor="phone"
                                className='absolute -top-3  bg-white  px-3 cursor-pointer shadow border rounded  '>Phone</label>
                                <input 
                                 onChange={handleForm}
                                 name='phone'
                                 value={reserve.phone}
                                id='phone'
                                className=' outline-none px-3  p-2 text-black'
                                type="number" 
                                placeholder='+880'required
                                />
                        </div>



                    

                  </div>

              
              {/*SELECET TIME DATE AND */}

              <div className='flex items-center space-x-6 w-full font-medium text-blue-400 '>

                    <div className='relative p-2 border-2 rounded grow'>
                           <div className='absolute bg-white px-3 -top-4  border shadow rounded px-2'>
                              Choose One
                           </div>
                        <select
                        className='w-full p-2  outline-none  rounded  font-semibold text-black '
                        name="service"
                        onChange={handleForm}
                        value={reserve.service}
                        required
                        >
                            <option value="a">Select your Service</option>
                            <option value="b">a</option>
                            <option value="c">b</option>
                            <option value="d">c</option>
                            <option value="e">d</option>
                            <option value="f">e</option>
                        </select>
                    </div>

                    <div className='relative py-4 px-2 border-2 rounded'>
                            <div className='absolute bg-white px-3 -top-4  border shadow rounded '>
                              Date
                           </div>
                        <input 
                        onChange={handleForm}
                        value={reserve.date}
                        name='date'
                        className=' outline-none text-black rounded px-2 '
                        type="date"
                        required 
                       />
                    </div>

                    </div>




                <div>
  
                    <div className='relative p-2 border-2  rounded grow font-semibold'>
                           <div className='absolute border rounded shadow px-3 bg-white  -top-4  text-blue-400 px-2'>
                              Select Beautcian
                           </div>
                           
                        <select
                        className='w-full p-2  outline-none  rounded'
                        onChange={handleForm}
                        name="beautician"
                        value={reserve.beautician} 
                        required
                        >
                            <option  value="" ></option>
                            <option value="2">option one</option>
                            <option value="this is ofton">option one</option>
                            <option value="3">option one</option>
                            <option value="4">option one</option>
                            <option value="5">option one</option>
                        </select>
                    </div>
               </div>

               <div id='TIME' className='grid grid-cols-6 gap-4 border-red-400 p-4 rounded'>
                 <div 
                 id='9-10'
                 onClick={()=>{setReserve({...reserve, time : "9-10"});selectTime('9-10')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 01</span></p>
                      <span>9-10</span>
                 </div>


               

                 <div 
                 id='10-11'
                 onClick={()=>{setReserve({...reserve, time : "10-11"});selectTime('10-11')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 02</span></p>
                      <span>10-11</span>
                 </div>

                 <div 
                 id='11-12'
                 onClick={()=>{setReserve({...reserve, time : "11-12"});selectTime('11-12')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 03</span></p>
                      <span>11-12</span>
                 </div>

                 <div 
                 id='12-1'
                 onClick={()=>{setReserve({...reserve, time : "12-1"});selectTime('12-1')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 04</span></p>
                      <span>12-01</span>
                 </div>

                 <div 
                 id='2-3'
                 onClick={()=>{setReserve({...reserve, time : "2-3"});selectTime('2-3')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 05</span></p>
                      <span>2-3</span>
                 </div>

                 <div 
                 id='3-4'
                 onClick={()=>{setReserve({...reserve, time : "3-4"});selectTime('3-4')}}
                 name='time'
                
                 className='block bg-green-400 p-4 font-normal rounded font-bold  text-white cursor-pointer hover:bg-red-500'>
                      <p>Serial - <span className='font-bold'> 06</span></p>
                      <span>3-4</span>
                 </div>
               
               </div>

            <button
            type='submit'
            className='p-2 texts-white font-bold rounded  bg-blue-500 text-white'>
              Confirm Booking
            
            </button>

            </form>

        </div>
    </div>
  )
}
