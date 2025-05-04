import { url } from "inspector";

export default function First(){

    return(
        <>
        <div className="h-fit p-6 bg-cover bg-center" style={{backgroundImage: `url('https://picsum.photos/1920/1080')`}}>
            <div className="w-fit p-8 text-white">
                <p className="text-lg font-bold">U Can Realty</p>
            
                <p className="text-5xl font-bold">Real Estate Made <br/> Simple in Toronto</p>
                <p className="text-lg w-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum molestias quae ducimus, quod omnis deserunt nobis a obcaecati consectetur labore.</p>
                <button className="text-lg hover:bg-blue-500 px-3 py-2 rounded-md border-3 border-amber-600">Get Mortgage Advice Now</button>
            </div>
        </div>
        </>
    )
}