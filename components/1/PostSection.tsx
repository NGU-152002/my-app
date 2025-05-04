import PostCard from "./PostCard";

export default function PostSection(){

    return(
        <>
        <div>
            <p className="font-bold text-xl text-blue-500">Scroll-Worthy Spaces We Posted</p>

            <div className="flex space-x-3">
                <div className=""><p className="p-3 rounded-full border-3 border-blue-600">L</p></div>
                <div className="flex w-full justify-center overflow-x-auto space-x-5 ">
                    <PostCard />
                    <PostCard />
                    <PostCard />


                </div>
                <div className=""><p className="p-3 rounded-full border-3 border-blue-600">L</p></div>

            </div>
        </div>
        </>
    )
}