

function ScheduleConsl() {
  return (
    <>
    <div className="py-5 flex justify-center space-x-10">
    <div className=" space-y-5 flex flex-col justify-center">
        <p className="font-bold  text-4xl">Schedule Consultation</p>
        <p className="font-semibold">Book a consultation with our experts to discuss your real estate goals</p>
    </div>
    <form action="#" className="space-y-5">
        <div className="flex flex-col space-y-1">
            <label className="font-bold " htmlFor="name">Name</label>
            <input className="w-100 outline-1 rounded-md p-1 h-10" type="text" placeholder="Enter your name" name="name" id="name" />
        </div>

        <div className="flex flex-col space-y-1">
            <label className="font-bold " htmlFor="email">Email</label>
            <input className="w-100 outline-1 rounded-md p-1 h-10" type="email" placeholder="Enter your Email" name="email" id="email" />
        </div>       
        
        <div className="flex flex-col space-y-1">
            <label className="font-bold " htmlFor="phone">Phone</label>
            <input className="w-100 outline-1 rounded-md p-1 h-10" type="text" placeholder="Enter your phone number" name="phone" id="phone" />
        </div>

        <button className="px-7 font-semibold cursor-pointer py-2 text-white bg-blue-700 rounded-lg" type="submit">Schedule Now</button>


    </form>
    </div>
    </>
  )
}

export default ScheduleConsl