
function HereHelp() {
  return (
<>
          <div className="flex justify-between items-center space-x-7 px-10">
              <div className="space-y-7">
                  <p className="font-bold text-2xl">We are here to Help</p>
                  <div className="space-y-3">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum pariatur animi maiores vero at quisquam quas veritatis quo amet sed iste explicabo eveniet fugiat delectus cupiditate iure perspiciatis quaerat blanditiis iusto autem nulla! Consequuntur reiciendis, vel rem optio esse earum quos.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolorum.</p>
                      <button className="bg-[#FFB602] rounded-2xl font-semibold cursor-pointer text-white px-7 py-2">Meet The Team</button>
                  </div>

                  <div className="flex space-x-10 items-center">

                      <div>
                          <img className="rounded-lg shadow-2xl" src="https://picsum.photos/70/70" alt="img" />
                          <p className="text-2xl font-semibold">900+</p>
                          <p className="text-gray-700 font-medium">Homes for Sale</p>

                      </div>

                      <div>
                          <img className="rounded-lg shadow-2xl" src="https://picsum.photos/70/70" alt="img" />
                          <p className="text-2xl font-semibold">287+</p>
                          <p className="text-gray-700 font-medium">Real Estate Agents</p>

                      </div>


                      <div>
                          <img className="rounded-lg shadow-2xl" src="https://picsum.photos/70/70" alt="img" />
                          <p className="text-2xl font-semibold">3.600+</p>
                          <p className="text-gray-700 font-medium">Properties Sold</p>

                      </div>

                  </div>
              </div>
              <div className="relative min-w-125 min-h-150">

              <img className="absolute top-0 left-0 rounded-lg shadow-2xl" src="https://picsum.photos/400/400" alt="img" />
              <img className="absolute bottom-0 right-0 rounded-lg shadow-2xl" src="https://picsum.photos/400/400" alt="img" />
              </div>

          </div>
      </>
  )
}

export default HereHelp