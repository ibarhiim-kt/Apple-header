import React from 'react'

import appleLogoBlack from './assets/appleLogoBlack.svg'
export default function WatchSeries() {
  return (
    <div className='watchImage flex flex-col items-center font-SfProText'>
    <div className='max-w-5xl mx-auto pt-[50px]'>
     <div className='flex items-center gap-1 justify-center'>
        <img src={appleLogoBlack} alt="black apple logo" width={40} height={40}/>
        <p className='font-bold text-[45px] '>WATCH</p>
     </div>
    </div>
    <p className='font-semibold text-[24px]'>SERIES 10</p>
    <p className='text-[30px]'>Thinstant classic.</p>   
    <div className='flex gap-4 mt-4'>
        <button className='bg-[#0077ED] rounded-full px-5 py-2 text-[18px] text-white'>Learn More</button>
        <button className='text-[#0077ED] rounded-full border border-[#0077ED] px-5 py-2 text-[18px]'>Buy</button>
    </div>
    </div>
  )
}
