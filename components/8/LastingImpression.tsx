export default function LastingImpression(){

    return(
        <>
            <div className="py-20 px-10 flex justify-center bg-[#535F8E]">
                <div className="bg-[#041559] 2xl:w-[63vw] 2xl:min-w-300 w-[80vw] min-w-270 flex justify-between rounded-4xl px-10 py-10">
                    <div className="space-y-5 ">
                        <p className="text-white text-4xl whitespace-nowrap font-bold">Ready to Make a Lasting <br /> Impression?</p>
                        <p className="text-white">Your property deserves more than just a '<span className="text-[#FDB502]">For Sale</span>' sign - it deserves to shine</p>
                        <p className="text-[#FDB502]">Let's stage it to sell quickly, beautifully, and for maximum value</p>
                        <button className="px-2.5 py-2.5 cursor-pointer text-white font-semibold border-2 border-white rounded-md">Book Your Staging Consultation</button>
                    </div>

                    <div className="relative w-full h-full ">
                        <div className="w-55 bottom-5 left-18 2xl:-bottom-5 2xl:left-20 h-55 rounded-full bg-[#FDB502] absolute" />
                        <img className="absolute bottom-20 left-30  2xl:bottom-5  2xl:left-30 w-120 h-70 2xl:w-150 2xl:h-90 object-cover rounded-4xl" src="https://picsum.photos/500/500" alt="img" />

                    </div>
                </div>
            </div>
        </>
    )
}