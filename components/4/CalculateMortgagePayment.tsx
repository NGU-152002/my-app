function CalculateMortgagePayment() {
  return (
    <>
    
    <div className="px-30 pt-50 py-30">
                    <p className="font-bold text-3xl">Calculate Mortgage Payments</p>
                    <p>Estimate your payment with our easy-to-use loan calculator. Then get pre-qualified to buy by a local lender.</p>
                    
                    <form action="#">

                        <div className="flex flex-wrap gap-3">


                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="total_amt">Total Amount</label>
                            <input className="w-full shadow-lg px-3 outline-1 h-10 rounded-md" type="text" name="total_amt" id="total_amt" />
                        </div>

                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="down_payment">Down Payment</label>
                        <div className="flex space-x-3">
                            <input className="w-full shadow-lg px-3 outline-1 h-10 rounded-md" type="text" name="down_payment" id="down_payment" />
                            <input className="w-10 px-1 outline-1 shadow-xl rounded-md" maxLength={4} type="text" name="percentage"  id="percentage" />
                            </div>    
                        </div>

                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="interest_rate">Interest Rate</label>
                            <input className="w-full shadow-lg px-3 outline-1 h-10 rounded-md" type="text" name="interest_rate" id="interest_rate" />
                        </div>

                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="period">Amortization Period (months)</label>
                            {/* <input className="w-full shadow-lg outline-1 h-10 rounded-md" type="text" name="period" id="period" /> */}
                        <select className="w-full shadow-lg outline-1 h-10 px-3 rounded-md"  name="period" id="period">
                            <option className="h-10 px-3" value="#">Select amartization period</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                        </select>
                        </div>

                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="property_tax">Property Tax</label>
                            <input className="w-full shadow-lg px-3 outline-1 h-10 rounded-md" type="text" name="property_tax" id="property_tax" />
                        </div>

                        <div className="min-w-125 flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="home_insurance">Home Insurance</label>
                            <input className="w-full shadow-lg px-3 outline-1 h-10 rounded-md" type="text" name="home_insurance" id="home_insurance" />
                        </div>
                        </div>

                        <div className="w-full pt-2 space-y-4">
                        <p>Your estimated monthly payment: <span className="font-bold">8000</span></p>
                        <div className="space-x-5">
                            <button type="submit" className="text-white px-3 py-2.5 cursor-pointer font-semibold rounded-xl bg-[#FFB602]">Calculate now</button>
                            <button onClick={(e:any)=>{e.stopPropagation()}} className="border-2 rounded-xl px-3 py-2 border-[#FFB602] cursor-pointer  text-[#FFB602]">Start Over</button>
                        </div>
                        </div>
                       


                    </form>

                </div>
    </>
  )
}

export default CalculateMortgagePayment