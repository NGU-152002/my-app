import React from 'react'

function LocateLocalAgentBanner() {
    return (
    //     <>
    //         <div className='px-30 flex bg-blue-700 rounded-xl py-30 '>
    //             <div className=''>
    //                 <p className='text-xl font-semibold text-white'>Find a Local Real Estate Agent Today</p>
    //                 <p className='text-white'>If you're looking to buy or sell a home. We'll help you make the most money possible.</p>
    //                 <button className='px-3 py-2 font-semibold  rounded-lg bg-amber-400-400'>Find your location agent</button>
    //             </div>
    //             <div className='relative w-70 h-70'>
    //     {/* Visible part of the circle (top half) */}
    //     <div className='absolute bottom-0 w-full h-20 overflow-hidden'>
    //       <div className='absolute -top-20 w-full h-100  bg-amber-400-400' />
    //     </div>
        
    //     {/* Image positioned above the circle */}
    //     <img 
    //       className="absolute bottom-5 rounded-t-xl w-full h-32 object-cover shadow-xl" 
    //       src="https://picsum.photos/200/300" 
    //       alt="Real estate agent" 
    //     />
    //   </div>
    //         </div>
    //     </>
    <>

<div className="flex  items-center justify-between bg-[#04165C] text-white rounded-lg p-8 py-3 relative overflow-hidden">
  <div className="max-w-md space-y-4 z-10">
    <h1 className="text-4xl font-bold leading-tight">
      Find a Local Real Estate <br />
      Agent Today
    </h1>
    <p className="text-sm text-gray-200">
      If you’re looking to buy or sell a home. We’ll help you make the <br />
      most money possible.
    </p>
    <button className="flex items-center gap-2 bg-[#FFB602] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#FFB602] transition">
      Find your location agent
      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.65 6.65a7.5 7.5 0 015.5 9.5z" />
      </svg>
    </button>
  </div>




  <div className="relative w-[400px] h-[400px] z-10 flex items-end justify-center">
    <div className='relative w-[400px] h-[400px]'>

    <div className="absolute -bottom-5 w-full h-1/2 bg-[#FFB602] rounded-t-full z-0"></div>
    </div>
    <img src="https://picsum.photos/250/250" alt="Agent" className="absolute top-25 z-10 w-[260px] object-cover" />
  </div>
</div>

</>

    )
}

export default LocateLocalAgentBanner
