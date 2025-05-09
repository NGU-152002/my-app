export default function First(){

    return(
        <>
        <div className="flex h-[80vh] justify-between items-center px-20 bg-cover" style={{backgroundImage:"url('https://picsum.photos/1920/1080')"}}>
            <div className="space-y-5 " >
                <p className="uppercase 2xl:text-6xl text-white text-4xl font-bold">Transform your space, Elevate <br /> Your Lifestyle</p>
                <p className="text-white ">Expert renovation solutions to add beauty, value, and comfort to <br /> your home</p>
                <button className="px-6 py-2 font-semibold bg-[#FDB502] cursor-pointer text-white rounded-md">Book Your Consultation</button>
            </div>

            <img className=" w-130 h-70 object-cover rounded-4xl" src="https://picsum.photos/500/500" alt="img" />



        </div>
        </>
    )
}