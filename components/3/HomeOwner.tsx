

function HomeOwner() {
  return (
    <>
    <div className="flex bg-blue-600 justify-between py-20 space-x-3 px-30">
        <div className="space-y-3">
            <p className="font-semibold text-white text-2xl"> <span className="text-amber-400">Is</span> Homeownership  <br/> <span className="text-amber-300">Right for You?</span></p>
            <p className="font-semibold text-white w-150">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam, eum et enim adipisci facilis rem quam tempore sunt, corporis saepe numquam ipsam. Ipsum aspernatur sit repellendus esse, illum dolorum eveniet tempore.</p>
        </div>
        <img className="w-fit" src="https://picsum.photos/400/400" alt="Investment strategy" />

    </div>

    <div className="relative flex justify-evenly items-start">

        <div className="relative -top-16 z-20 px-3 py-8 w-70 rounded-2xl border-b-3 border-b-amber-400 bg-white">
            <p className="text-blue-600 text-center font-semibold">Do I have strong financial management skills?</p>
        </div>

        <div className="relative -top-16 z-20 px-3 py-11 w-70 rounded-2xl border-b-3 border-b-amber-400 bg-white">
            <p className="text-blue-600 text-center font-semibold">Am I financially stable?</p>
        </div>

        <div className="relative -top-16 z-20 px-3 py-5 w-70 rounded-2xl border-b-3 border-b-amber-400 bg-white">
            <p className="text-blue-600 text-center font-semibold">Am I ready for the responsiblity of mortgage payments, repairs, and ongoing maintenance?</p>
        </div>


        

    </div>
    </>
  )
}

export default HomeOwner