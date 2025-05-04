import PostCard from "./PostCard";

export default function PostSection(){

    return(
        <>
        <div  className="p-3 ">
            <p className="w-full font-bold text-center text-4xl text-blue-500">Scroll-Worthy Spaces We Posted</p>

            <div className="flex space-x-3">
                <div className="flex items-center"><p className="p-3 rounded-full border-3 border-blue-600">L</p></div>
                <div className="flex w-full justify-center overflow-x-auto space-x-5 ">
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </div>
                <div className="flex items-center"><p className="p-3 rounded-full border-3 border-blue-600">R</p></div>

            </div>
        </div>
        </>
    )
}