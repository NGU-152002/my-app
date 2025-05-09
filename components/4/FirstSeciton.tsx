import React from 'react'

function FirstSeciton() {
  return (
   <>
   <div className='w-full h-full'>
    <div className='w-full h-100 relative   flex justify-center items-center' >
    <div className='absolute w-full h-100 inset-0 bg-cover' style={{backgroundImage:"url('https://picsum.photos/1920/1080')"}}></div>
   
    <div className='absolute w-full h-100 inset-0 bg-black/20'></div>
       
        <div className='relative space-y-4'>
        <p className='font-semibold text-3xl text-white'>Mortgage Assistance</p>
        <p className='w-full text-center text-white'><span className=' text-[#FFB602] font-semibold'>Home</span> &gt; Mortgage Assistance</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default FirstSeciton