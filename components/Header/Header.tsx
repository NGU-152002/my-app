import React from 'react'

function Header() {
    return (
        <div>
            <div className='flex justify-between items-start py-3 px-10 bg-[#04165C]'>
                <div className='space-x-3 flex items-center'>


                    <div className='flex items-center space-x-3'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />
                        <p className='text-white font-semibold'>225 King Street West, Suite 1100 <br /> Toronto, ON M5V  3M2, Canada</p>

                    </div>

                    <div className='flex items-center space-x-3'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />
                        <p className='text-white font-semibold'>+1647614938</p>

                    </div>

                    <div className='flex items-center space-x-3'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />
                        <p className='text-white font-semibold'>info@ucanrealty.ca</p>

                    </div>

                </div>

                <div className='flex items-center  space-x-3'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-lg'>
                        <img className="w-fit rounded-2xl" src="https://picsum.photos/25/25" alt="img" />

                    </div>

                </div>

            </div>

            <div className='w-full flex justify-between px-20 py-5 items-center bg-[#2D428C]'>
                <div className=''>

                </div>
                <div className='flex space-x-10 items-center'>
                    <p className='text-white select-none cursor-pointer relative text-2xl after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'>BUY</p>
                    <p className='text-white select-none cursor-pointer relative text-xl after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'>SELL</p>
                    <p className='text-white select-none cursor-pointer relative text-xl after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'>STAGING</p>
                    <p className='text-white select-none cursor-pointer relative text-xl after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'>RENOVATIONS</p>
                    <p className='text-white select-none cursor-pointer relative text-xl after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100'>ABOUT US</p>
                    <button className='bg-[#FFB602] cursor-pointer px-10 py-3 rounded-xl text-[#04165C]'>Contact Us</button>
                </div>

            </div>
            <div className='w-full h-5 bg-white' />
            <div className='w-full h-5 bg-[#FFB602]' />


        </div>
    )
}

export default Header