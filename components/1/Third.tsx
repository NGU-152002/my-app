export default function Third(){

    return(
        <>
        <div className="bg-[#F2F2F2] ">
            <div className="flex justify-center items-center">
                <div className="px-4 py-2 flex items-center bg-[#04165C] space-x-2 w-fit rounded-xl ">

                <div className="w-2 h-2 bg-[#FFB602] rounded-full" />
                <p className="text-white font-semibold text-lg">Services</p>
                </div>
            </div>

            <div className="w-full">
                <p className="text-2xl text-center font-bold text-[#04165C]">From Planning to Completion</p>
                    <p className="text-2xl text-center font-bold text-[#04165C]">- Your Trusted Partner</p>
                </div>

                <div className="px-8 flex justify-center space-x-8">
                    <div className="relative group overflow-hidden 2xl:w-90 2xl:h-90 w-65 h-70 rounded-md">
                        <img className="rounded-md" src="https://picsum.photos/500/700" alt="img" />
                        <div
                            className="w-full h-full absolute bg-black/40 top-60 2xl:top-70 group-hover:top-0 duration-500 p-2 flex flex-col items-start gap-8 justify-end">
                            <p className="text-white w-full font-semibold text-center mb-51 2xl:mb-65 2xl:text-3xl text-lg">
                                Pre-construction</p>
                                <p></p>
                            
                        </div>

                    </div>

                    <div className="relative group overflow-hidden 2xl:w-90 2xl:h-90 w-65 h-70 rounded-md">
                        <img className="rounded-md" src="https://picsum.photos/500/700" alt="img" />
                        <div
                            className="w-full h-full absolute 2xl:top-70 bg-black/40 top-60 group-hover:top-0 duration-500 p-12 flex flex-col items-start gap-8 justify-end">
                            <p className="text-white   font-semibold text-center mb-51 2xl:mb-65 2xl:text-3xl text-lg ">
                               Construction</p>
                            
                        </div>

                    </div>

                    <div className="relative group overflow-hidden 2xl:w-90 2xl:h-90 w-65 h-70 rounded-md">
                        <img className="rounded-md" src="https://picsum.photos/500/700" alt="img" />
                        <div
                            className="w-full h-full absolute 2xl:top-70 bg-black/40 top-60 group-hover:top-0 duration-500 p-12 flex flex-col items-start gap-8 justify-end">
                            <p className="text-white font-semibold text-center mb-51 2xl:mb-65 2xl:text-3xl whitespace-nowrap text-lg">
                                Mortgage Assistance</p>
                            
                        </div>

                    </div>

                    <div className="relative group overflow-hidden 2xl:w-90 2xl:h-90 w-65 h-70 rounded-md">
                        <img className="rounded-md" src="https://picsum.photos/500/700" alt="img" />
                        <div
                            className="w-full h-full absolute 2xl:top-70 bg-black/40 top-60 group-hover:top-0 duration-500 p-12 flex flex-col items-start gap-8 justify-end">
                            <p className="text-white font-semibold text-center mb-51 2xl:mb-65 2xl:text-3xl  text-lg">
                               Surface Solutions</p>
                            
                        </div>

                    </div>



                </div>


            </div>
        </>
    )
}