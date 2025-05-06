
function ContactForm() {
  return (
   <>
   <form className="py-10  px-3 shadow-xl rounded-xl bg-white">
    <div className="w-full ">
        <p className=" w-full text-center text-2xl font-semibold">Contact form</p>
        <p className="text-gray-500 w-full text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus!</p>
    </div>

    <div className="space-y-3">
        <div className="flex justify-evenly ">

            <div className="space-y-3">
                <label className="font-semibold" htmlFor="name">Your name</label>
                <input placeholder="Your name" className="w-80 px-3 h-10 outline-1 rounded-lg" type="text" name="name" id="name" />
            </div>

            <div className="space-y-3">
                <label className="font-semibold" htmlFor="email">Email or phone</label>
                <input placeholder="Email or phone number" className="w-80 px-3 h-10 outline-1 rounded-lg" type="text" name="email" id="email" />
            </div>

            <div className="space-y-3">
                <label className="font-semibold" htmlFor="property_type">Property type</label>
               <select className="w-80 px-3 outline-1 h-10 rounded-lg" name="property_type" id="property_type">
                <option value="Choose">Choose</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
               </select>
            </div>


        </div>

        <div className="flex flex-col ">
            <label className="font-semibold" htmlFor="message">Message</label>
            <textarea className="min-h-30 w-full px-3  rounded-lg outline-1" name="message" id="message"></textarea>
        
        </div>
        <div className="">

        <button className="px-6 cursor-pointer py-4 bg-[#FFB602] rounded-xl text-white font-semibold">Send request</button>
        </div>
    </div>

   </form>
   </>
  )
}

export default ContactForm