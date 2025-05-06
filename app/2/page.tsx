import CoreDrivers from '@/components/2/CoreDrivers'
import DiscorverStory from '@/components/2/DiscorverStory'
import FirstSeciton from '@/components/2/FirstSeciton'
import OurReach from '@/components/2/OurReach'
import React from 'react'

function page() {
  return (
    <div className='bg-[#F2F2F2]'>
    <FirstSeciton />
    <CoreDrivers />
    <OurReach />
    <DiscorverStory />
    </div>
  )
}

export default page