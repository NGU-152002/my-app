

function FirstSection() {
  return (
    <>
    <div>
     <div className='w-full h-100 relative'>
        <div className='absolute inset-0 bg-cover' style={{backgroundImage:"url('https://picsum.photos/1920/1080')"}}></div>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative flex justify-center items-center h-full'>
         <div className='space-y-4'>
         <p className='font-semibold text-3xl text-white'>Sell</p>
         <p className='w-full text-center text-white'><span className='font-semibold'>Home</span> &gt; Sell</p>
         </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default FirstSection