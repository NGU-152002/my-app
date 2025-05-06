

function MarketTrends() {
  return (
    <>
    <div className="px-20 py-5 bg-[#36468C] space-y-4">
        <div className="space-y-5 pb-10 flex flex-col items-center">
        <p className="font-bold text-4xl text-white">Market Trends</p>
        <p className="text-white text-sm">Stay informed about real estate data</p>

        </div>

        <div className="flex  justify-center space-x-5">

            <div className="p-2 w-full rounded-md border-2 border-[#4A5897]">
                <p className="text-gray-200">Average Home Price</p>
                <p className="text-white text-2xl">$600k</p>
                <p className="text-white">+5% compared to last year</p>
            </div>

            <div className="p-2 w-full rounded-md border-2 border-[#4A5897] ">
                <p className="text-gray-200">Inventory</p>
                <p className="text-white text-2xl">1000</p>
                <p className="text-white">-10% compared to last month</p>
            </div>

        </div>

        <div className="space-y-3 ">
            <p className="text-white font-semibold">Price Comparision</p>
            <p className="text-gray-400 text-sm">Prices</p>

            <div className="border-2 rounded-md border-[#4A5897] w-full h-100">
                <p className="flex h-full justify-center text-white items-center">No Graph Yet</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default MarketTrends