export default function FeaturedProperties(){

    return(
        <>
        <div className="p-3 space-y-7">
            <div className="p-3 flex justify-between items-center">
                <p className="font-bold text-2xl">Featured Properties</p>
                <p className="cursor-pointer font-bold text-lg text-blue-500">View all</p>
            </div>

                <div className="w-full flex justify-center space-x-7 rounded-md items-center">


                    <div className="w-70 rounded-md  h-fit transition-all duration-300">
                        <img className="rounded-md" src="https://picsum.photos/700/700" alt="img" />
                        <div className="p-2 space-y-3 hover:bg-amber-300 transition-all duration-300">
                            <p className="text-lg">Luxury Condo in Toronto</p>
                            <p className="text-xl font-semibold">2 Bed, 2 Bath</p>
                        </div>

                    </div>


                    <div className="w-70 rounded-md  h-fit transition-all duration-300">
                        <img className="rounded-md" src="https://picsum.photos/700/700" alt="img" />
                        <div className="p-2 space-y-3 hover:bg-amber-300 transition-all duration-300">
                            <p className="text-lg">Luxury Condo in Toronto</p>
                            <p className="text-xl font-semibold">2 Bed, 2 Bath</p>
                        </div>

                    </div>

                    
                    <div className="w-70 rounded-md  h-fit transition-all duration-300">
                        <img className="rounded-md" src="https://picsum.photos/700/700" alt="img" />
                        <div className="p-2 space-y-3 hover:bg-amber-300 transition-all duration-300">
                            <p className="text-lg">Luxury Condo in Toronto</p>
                            <p className="text-xl font-semibold">2 Bed, 2 Bath</p>
                        </div>

                    </div>

                    
                </div>

        </div>
        </>
    )
}