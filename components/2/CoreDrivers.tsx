"use client";
import { useState } from "react"
import CoreDriversContent from "./CoreDriversContent";

const Tabs = [
  {
    name: "Integrity First",
    title:"We build trust, not just transactions",
    desc:"lorem25"
  },
  {
    name: "Innovation Always",
    title:"Modern solutions for a modern market",
    desc:"lorem25"
  },
  {
    name: "People-Centric",
    title:"You're more than just a client - you're part of our community",
    desc:"lorem25"
  },
  {
    name: "Sustainability Focused",
    title:"Shaping communities that last for generations",
    desc:"lorem25"
  },
]

function CoreDrivers() {
  const [selectedTab,setSetSelectedTab] = useState(Tabs[0].name);
  const [selectedContent,setSelectedContent] = useState<{title:string,desc:string}>({title:Tabs[0].title,desc:Tabs[0].desc})

  return (
    <>
      <div className="px-10">
        <div className="py-10">

          <p className="text-2xl text-center font-semibold ">Core Drivers of U Can Realty</p>
        </div>

        <div className="bg-[#FFB602]">
          <div className="flex pb-2 justify-center space-x-10">
        {
          Tabs.map((item:{name:string,title:string,desc:string},index:number)=>{
            return(
              <div key={index} onClick={()=>{setSetSelectedTab(item.name);setSelectedContent({title:item.title,desc:item.desc})}} className={` ${selectedTab==item.name?"bg-[#04165C] text-white":"bg-white"} font-semibold px-7 py-2 cursor-pointer select-none rounded-b-lg  shadow-lg`}>
                {item.name}
              </div>
            )
          })
        }
        </div>
          <CoreDriversContent data={selectedContent} />

        </div>

      </div>
    </>
  )
}

export default CoreDrivers