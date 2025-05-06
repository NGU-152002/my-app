import React from 'react'

function HousePost({isSell=false}:{isSell?:boolean}) {
    return (
        <div className="w-85 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <img className="w-85 h-60 object-cover" src="https://picsum.photos/300/300" alt="House Image" />

            <div className="p-4 pr-0 relative space-y-5">
                <div className="absolute left-0 top-4 h-7 w-1 bg-[#FFB602] rounded-r"></div>

                <h3 className="text-lg truncate font-semibold text-[#001858] pl-3">
                    1224 Saint Nicholas Avenue, Apt
                </h3>

                <div className="mt-2 flex justify-between items-center pl-3">
                    <span className="text-[#001858] font-bold text-lg">$ 1500<span className="text-sm font-normal">/mo</span></span>
                    <span className="bg-[#FFB602]  text-white text-sm font-semibold px-3 py-1 rounded-md">{isSell?"For Sell":"For Rent"}</span>
                </div>

                <div className='flex space-x-5 pr-4'>

                    <div className='flex items-center space-x-3'>
                        <img className="w-5 h-5 object-cover" src="https://picsum.photos/20/20" alt="Bed Img" />
                        <p className='text-gray-500 whitespace-nowrap'>2 Bed</p>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <img className="w-5 h-5 object-cover" src="https://picsum.photos/50/50" alt="Bed Bathroom" />
                        <p className='text-gray-500 whitespace-nowrap'>2 Bathroom</p>
                    </div>


                    <div className='flex items-center space-x-3'>
                        <img className="w-5 h-5 object-cover" src="https://picsum.photos/50/50" alt="sqft Img" />
                        <p className='text-gray-500 whitespace-nowrap'>1700 sqft</p>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default HousePost