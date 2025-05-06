import FirstSection from "@/components/7/FirstSection"
import HousePost from "@/components/6/HousePost"

function page() {
  return (
<div className="bg-[#F2F2F2]">
<FirstSection />
<div className="bg-[#535F8E] py-5">

<p className="font-semibold text-white px-30 py-5">All Sell Properties</p>

<div className="px-30 py-5 gap-6 flex flex-wrap">

<HousePost isSell={true} />
<HousePost isSell={true} />
<HousePost isSell={true} />
<HousePost isSell={true} />
<HousePost isSell={true} />
<HousePost isSell={true} />


</div>
<div className="flex space-x-3 justify-center items-center  item">
    <p className="w-10 h-10 select-none cursor-pointer font-bold text-2xl text-center flex justify-center items-center rounded-full  bg-white">&lt;</p>
    <p className=" w-7 h-7  rounded-full flex justify-around items-center cursor-pointer select-none font-semibold">1</p>
    <p className="text-white w-7 h-7 bg-amber-400-400 rounded-full flex justify-around items-center cursor-pointer font-semibold">2</p>
    <p className=" w-7 h-7  rounded-full flex justify-around items-center cursor-pointer select-none font-semibold">3</p>
    <p className=" w-7 h-7  rounded-full flex justify-around items-center cursor-pointer select-none font-semibold">4</p>
    <p className=" w-7 h-7  rounded-full flex justify-around items-center cursor-pointer select-none font-semibold">5</p>

    <p className="w-10 h-10  select-none cursor-pointer font-bold text-2xl text-center flex justify-center items-center rounded-full  bg-white">&gt;</p>
</div>
</div>

</div>
  )
}

export default page