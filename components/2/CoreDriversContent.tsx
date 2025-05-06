interface CoreDriversContentProps{
    data:{
        title:string;
        desc:string;
    }

}

function CoreDriversContent({data}:CoreDriversContentProps) {
    return (
        <div className="bg-[#04165C] pb-20 space-x-3 py-2 flex justify-center items-center">
 
            <img className="rounded-xl" src="https://picsum.photos/200/200" alt="img" />

            <div className="space-y-3 w-[600px]">
                <p className="text-2xl font-semibold text-white">{data.title}</p>
                <p className=" text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nulla aperiam! Aperiam unde rerum eveniet reprehenderit natus architecto consequuntur, consectetur soluta autem provident. Nobis, sequi! Earum error quod perspiciatis debitis!</p>
            </div>

        </div>
    )
}

export default CoreDriversContent