"use client";

import CalculateMortgagePayment from "./CalculateMortgagePayment";

function SellingYourHome() {
    return (
        <>
            <div className="bg-[#04165C] py-10 pb-70 space-y-10">
                <div className="w-full flex flex-col items-center text-center space-y-5">
                    <p className="text-white font-bold text-2xl">Selling Your Home With Realty</p>
                    <p className="w-100 text-center text-white">we'll get to know you to understand you selling goods, and explain the sellling processso you kn ow what to expect.</p>
                </div>

                <div className="flex justify-center space-x-10">

                    <div className="p-4 bg-white w-fit  rounded-xl space-y-4">
                        <div className="w-full flex justify-center">
                            <img className="rounded-lg   shadow-2xl" src="https://picsum.photos/70/70" alt="img" />

                        </div>

                        <p className="font-semibold text-center text-[#04165C]-700">Complete The Questionnaire</p>
                        <div className="mx-25 flex justify-center border-t-2 w-20" />
                        <p className="text-center w-70 text-gray-500">Your responses will help our partner, Shortly after your lender is selected. they'll contact you to discuss options for financing your future home.</p>
                        <button className="bg-amber-400-400 font-semibold cursor-pointer">Read More</button>
                    </div>

                    <div className="p-4 bg-white w-fit  rounded-xl space-y-4">
                        <div className="w-full flex justify-center">
                            <img className="rounded-lg   shadow-2xl" src="https://picsum.photos/70/70" alt="img" />

                        </div>

                        <p className="font-semibold text-center text-[#04165C]-700">Get Financial Connections</p>
                        <div className="mx-25 flex justify-center border-t-2 w-20" />

                        <p className="text-center w-70 text-gray-500">Your responses will help our partner, Shortly after your lender is selected. they'll contact you to discuss options for financing your future home.</p>
                    </div>

                    <div className="p-4 bg-white w-fit  rounded-xl space-y-4">
                        <div className="w-full flex justify-center">
                            <img className="rounded-lg   shadow-2xl" src="https://picsum.photos/70/70" alt="img" />

                        </div>

                        <p className="font-semibold text-center text-[#04165C]-700">Recieve your Custom Quota</p>
                        <div className="mx-25 flex justify-center border-t-2 w-20" />
                        <p className="text-center w-70 text-gray-500">Your responses will help our partner, Shortly after your lender is selected. they'll contact you to discuss options for financing your future home.</p>
                    </div>



                </div>


            </div>

            <div className="relative">

                <div className="absolute -top-55 px-30  rounded-t-4xl ">
                    <img className="rounded-t-xl w-500 h-80 object-cover shadow-xl" src="https://picsum.photos/1920/1080" alt="img" />

                </div>


            </div>
            <CalculateMortgagePayment />



        </>
    )
}

export default SellingYourHome