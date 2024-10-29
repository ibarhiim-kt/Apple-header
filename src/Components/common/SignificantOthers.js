import React from 'react'
import AccordianArrow from '../../Components/assets/accordianArrow.svg'
import SignificantIpadIphone from '../../Components/assets/significant_ipad_iphone.jpg'

export default function SignificantOthers() {
  return (
    <div className='pt-[150px] max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className="pb-20 text-[56px] font-SfProDisplayMedium max-w-[528px]">Significant others</div>
      <div className='bg-[#F5F5F7] grid customGridCols'>
        <div className='max-w-[590px] p-[120px]'>
            <div className='flex items-center justify-between'>
            <p className='font-SfProDisplayMedium text-[28px] leading-[1.1428571429] font-semibold'>iPad and iPhone</p>
            <img src={AccordianArrow} alt="arrow" />
            </div>
            <p className='ont-SfProTextLight -tracking-[0.022em] leading-[1.2353641176] text-[17px] pt-[13.6px] pb-[30px]'>iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations, and more. You can also pick up wherever you left off with Handoff.</p>
        </div>
        <div>
            {/* <img src={SignificantIpadIphone} alt="image" className='w-[1090px] h-[760px]'/> */}
        </div>
      </div>
    </div>
  )
}
