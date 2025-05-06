export default function Second(){
    return(
        <>
        <div className="w-full bg-[#F2F2F2] flex justify-between">
            <div className="px-10 space-y-4  flex flex-col justify-center">
                <p className="text-3xl text-[#04165C] font-bold">About U Can Realty</p>
                <p className="font-semibold text-lg">Real Estate With a Purpose</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime doloribus voluptas laborum culpa odio quos, magnam possimus ipsam esse.</p>
                <button className="w-fit rounded-md px-10 py-2 bg-amber-400 cursor-pointer">Learn More</button>
            </div>
            <div>
                <img className="rounded-md" src="https://picsum.photos/700/500" alt="img" />
            </div>

        </div>
        </>
    )
}