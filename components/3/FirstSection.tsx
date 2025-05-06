
function FirstSection() {
    return (
        <div className="bg-cover w-full h-[500px]" style={{ backgroundImage: "url('https://picsum.photos/1336/768')" }}>
            <div className="p-7 space-y-3">
                <div>

                    <p className="text-4xl font-bold text-[#04165C]-500" >FIND YOUR</p>
                    <p className="text-6xl font-bold text-amber-500">DREAM <span className="text-[#04165C]-600">HOME</span></p>
                </div>
                <p className="text-4xl font-bold text-[#04165C]-500">WITH US</p>

                <p className="text-gray-500 font-semibold">Whether you're a first-time buyer or a<br /> seasoned investor</p>


            </div>

            <div className="absolute bg-white left-80 min-w-[700] min-h-[700] rounded-full border-20 border-b-0 border-r-0 border-l-amber-400 rotate-45 border-t-blue-600">

            </div>

            <div className="relative  w-full h-5xl max-w-5xl mx-auto py-12">
                {/* Title */}
                <p className="font-bold text-3xl text-center mb-16">
                    <span className="text-amber-400">Our</span> Offerings
                </p>

                {/* Cards Container - now properly centered */}
                <div className="flex  justify-center space-x-4  px-4">
                    {/* Card 1 */}
                    <div className="relative rounded-lg p-6 bg-white shadow-lg w-64 space-y-7">
                        <div className="w-20 h-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full flex justify-center items-center bg-[#FFB602]">
                            <img className="rounded-full" src="https://picsum.photos/60/60" alt="Market analysis" />
                        </div>
                        <p className="text-2xl pt-10 font-semibold text-center text-[#04165C]-600">Market Analysis</p>
                        <p className="text-gray-600 text-center">
                            Explore future developments with great investment potential
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-lg p-6 bg-white shadow-lg w-64 space-y-7">
                        <div className="w-20 h-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full flex justify-center items-center bg-blue-600">
                            <img className="rounded-full" src="https://picsum.photos/60/60" alt="Investment strategy" />
                        </div>
                        <p className="text-2xl pt-10 font-semibold text-center text-[#04165C]-600">Investment Strategy</p>
                        <p className="text-gray-600 text-center">
                            Customized approaches for your financial goals
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-lg p-6 bg-white shadow-lg w-64 space-y-7">
                        <div className="w-20 h-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full flex justify-center items-center bg-[#FFB602]">
                            <img className="rounded-full" src="https://picsum.photos/60/60" alt="Risk management" />
                        </div>
                        <p className="text-2xl pt-10 font-semibold text-center text-[#04165C]-600">Risk Management</p>
                        <p className="text-gray-600 text-center">
                            Protect your assets with our proven methods
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="relative rounded-lg p-6 bg-white shadow-lg w-64 space-y-7">
                        <div className="w-20 h-20 absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full flex justify-center items-center bg-blue-600">
                            <img className="rounded-full" src="https://picsum.photos/60/60" alt="Portfolio review" />
                        </div>
                        <p className="text-2xl pt-10 font-semibold text-center text-[#04165C]-600">Portfolio Review</p>
                        <p className="text-gray-600 text-center">
                            Comprehensive analysis of your current investments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection