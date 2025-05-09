export default function First(){

    return(
        <>
        <div className="h-[80vh] px-10 flex flex-col justify-between rounded-bl-[10%]  pt-20 bg-cover" style={{backgroundImage:"url('https://picsum.photos/1920/1080')"}}>
            <p className="text-6xl 2xl:text-8xl  text-white font-bold w-full text-center">First Impressions Sell Homes</p>

            <div className="px-6 py-15 ml-40 rounded-t-4xl mt-3  space-y-4 bg-[rgba(4,21,89,0.5)] 2xl:w-[25vw] w-[35vw]">
                <p className="font-medium text-white">Transform your property into a story <br /> buyers can't resist</p>
            
                <p className="font-medium text-white">At U Can Realty, we believe a well-staged home isn't just about furniture - it's about creating emotional connections that inspire action. Our professional staging services help homes sell faster, for higher value, and with greater buyer appeal.</p>
                <button className="cursor-pointer bg-[#FDB502] px-3 font-semibold py-2 rounded-lg text-white ">Book Your Consultation</button>
            </div>
        </div>
        </>
    )
}