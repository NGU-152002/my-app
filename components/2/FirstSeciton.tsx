"use client";

import { useEffect, useState } from "react";


function FirstSeciton() {
    const [show,setShow]  = useState(false);

    useEffect(()=>{
        setTimeout(()=>{setShow(true)},1000)
    },[])


  return ( 
    <>
    <div className='flex bg-[#04165C]'>
    {/* First div - always visible */}
    <div className={`transition-all border-r-1 border-[#FFB602] duration-300 ${show ? 'w-1/2' : 'w-full justify-center items-center'}`}>
              <img className="w-full object-cover h-[50vh]" src="https://picsum.photos/400/400" alt="img" />
              <div className={`px-3 w-full transition-all duration-300 ${show ? 'translate-x-0' : ''}`}>
                  <p className={`text-white w-full ${show?"":"text-center"}   font-bold text-2xl`}>
                      Redefining Real Estate, <br /> One Community at a Time
                  </p>
                  <p className={`text-white w-full ${show?"":"text-center"}   `}>At U Can Realty,we're not just property experts - we're community builders</p>
              </div>
          </div>
    
    {/* Second div - conditionally rendered but always in DOM */}
    <div className={`transition-all duration-300 ${show ? 'w-1/2' : 'w-0 overflow-hidden'}`}>
        <img className="w-full object-cover h-[50vh]" src="https://picsum.photos/400/400" alt="img" />
        <div>
            <p className='text-white px-3 font-bold text-2xl'>Redefining Real Estate, <br/> One Community at a Time</p>
        </div>
    </div>
</div>

<div className="bg-[#04165C] py-5">
<p className="w-full text-center text-2xl text-white font-bold">To make real estate simple, accessible, and<br/> rewarding for everyone</p>

</div>
</>
)
}


export default FirstSeciton

        // {/* <div className='w-full '>
        // <img className="w-full object-cover" src="https://picsum.photos/1000/400" alt="img" />

        //     <div>
        //         <p className='text-whtie font-bold text-2xl'>Redefining Real Estate, <br/> One Community at a Time</p>
        //     </div>
        // </div> */}
