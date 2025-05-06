export default function PostCard() {

    return (
        <>
            <div className="w-fit p-2 space-y-3  rounded-lg shadow-2xl">
                <div className=" flex justify-between items-center p-2">
                    <div className="flex space-x-2 items-center">
                        <img className="rounded-full" src="https://picsum.photos/50/50" alt="img" />
                        <p className="font-semibold ">U_Can_Reality</p>


                    </div>

                    <div className="flex items-center">
                        <button className="p-1  bg-[#FFB602] rounded-md">Follow</button>
                        <button className="flex text-black items-center text-2xl font-bold">...</button>
                    </div>
                </div>

                <img className="w-[500px] rounded-2xl flex justify-center" src="https://picsum.photos/500/300" alt="img" />
                <div className="flex justify-between items-center">
                    <p className="px-2 py-1 font-semibold  text-sm bg-[#FFB602] rounded-md">Commercial</p>
                    <p className=" text-sm">2 days ago</p>
                </div>

                <div className="space-y-2">
                    <p className="text-md font-semibold text-[#04165C]-800">Modern Living in the Heart of Toronto</p>
                    <div className="space-x-3 flex items-center">
                        <img src="https://picsum.photos/30/30" alt="location" />
                        <p className="font-semibold text-xl text-amber-300">Toronto</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <img className="rounded-lg" src="https://picsum.photos/40/40" alt="instagram" />
                        <button className="text-white text-sm bg-blue-900 px-4 py-1 rounded-md">Details</button>
                    </div>
                </div>


            </div>
        </>
    )
}