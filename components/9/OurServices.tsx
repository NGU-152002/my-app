export default function OurServices(){

    return(
        <>
            <div className="space-y-4 w-full flex flex-col items-center">
                <p className="uppercase 2xl:text-lg">About Our Services</p>
                <p className="uppercase font-bold text-5xl">Bringing vision and value to every project</p>
                <p className="2xl:text-lg text-center">Whether you're upgrading a kitchen or remodeling an entire home, U Can Realty's <br /> renovation team brings vision, quality,and value to every project. </p>
                <img className="w-120 h-60 rounded-4xl" src="https://picsum.photos/500/500" alt="img" />

                <p className="px-5 py-2 rounded-3xl bg-[#041559] text-[#FDB502] font-semibold">Services We Offer</p>

                <div className="flex justify-between space-x-5">

                    <div className="p-3 w-65 flex flex-col items-center rounded-2xl shadow-2xl">
                        <img className="w-20 h-20 rounded-4xl" src="https://picsum.photos/500/500" alt="img" />
                        <p className="font-bold text-center w-full text-lg">Interior & Exterior <br /> Upgrades </p>
                        <p className="text-center w-full">Enhance your homoe's structure, <br />style, and curb appeal</p>
                        <p className="text-center w-full">***</p>
                    </div>

                    <div className="p-3 w-65 flex flex-col items-center rounded-2xl shadow-2xl">
                        <img className="w-20 h-20 rounded-4xl" src="https://picsum.photos/500/500" alt="img" />
                        <p className="font-bold text-center w-full text-lg">Kitchen & Bathroom <br /> Remodeling </p>
                        <p className="text-center w-full">Mordernize your spaces for <br />funciton and beauty</p>
                        <p className="text-center w-full">***</p>
                    </div>

                    <div className="p-3 w-65 flex flex-col items-center rounded-2xl shadow-2xl">
                        <img className="w-20 h-20 rounded-4xl" src="https://picsum.photos/500/500" alt="img" />
                        <p className="font-bold text-center w-full text-lg">Flooring, Painting, <br /> Smart Installs </p>
                        <p className="text-center w-full">Refresh your floors, walls, and <br />add smart features</p>
                        <p className="text-center w-full">***</p>
                    </div>


                    <div className="p-3 w-65 flex flex-col items-center rounded-2xl shadow-2xl">
                        <img className="w-20 h-20 rounded-4xl" src="https://picsum.photos/500/500" alt="img" />
                        <p className="font-bold text-center w-full text-lg">Basement Finishing <br /> & Redesign </p>
                        <p className="text-center w-full">Turn your basement into a <br />stunning livable area</p>
                        <p className="text-center w-full">***</p>
                    </div>

                    

                </div>
            </div>
        </>
    )
}