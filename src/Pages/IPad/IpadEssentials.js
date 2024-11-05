import React, { useEffect } from 'react'
import Supernovae from '../../Components/assets/supernovae.png'
import ArtOfFloral from '../../Components/assets/artOfFloral.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function IpadEssentials() {

  useEffect(()=>{
  gsap.set(".ipadEssentialsTextAnima",{y:0, opacity:1})
  gsap.from(".ipadEssentialsTextAnima",{
    duration:0.8,
    opacity:0,
    y:40,
    // stagger:0.2,
    scrollTrigger:{
    trigger:".iPadEssentialsTextAnima",      
  } 
  })
})

  return (
    <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className="pb-20 leading-[1.05]">
        <p className="text-[56px] font-SfProDisplayMedium ipadEssentialsTextAnima">iPad essentials.</p>
      </div>

    <div className='grid grid-cols-2 gap-5 relative mx-3 ipadEssentialsTextAnima'>
      <div className='bg-white rounded-[28px] flex flex-col items-center text-center justify-between px-8 pt-8'>
      <div className='pt-6 pb-12'>
        <p className='font-SfProDisplayMedium text-[28px] mb-0.5 font-semibold'>Apple Pencil</p>
        <p className='mb-0.5  font-SfProTextRegular text-[17px]'>Dream it up. Jot it down.</p>
        <button className='font-SfProTextRegular text-[17px] text-[#1472D0]'>Learn more</button>
      </div>
      <div>
      <img src={Supernovae} alt="" className='max-w-[732px] h-[456px]' />
      </div>
      </div>     
      <div className='bg-white rounded-[28px] flex flex-col-reverse pb-8 px-8 text-center items-center justify-between'>
      <div>
        <p className='font-SfProDisplayMedium text-[28px] mb-1 '>Keyboards for iPad</p>
        <p className='mb-[13.6px] font-SfProTextRegular text-[17px]'>Type it out. Take it with you.</p>
        <button className='font-SfProTextRegular text-[17px] text-[#1472D0] pb-6'>Learn more</button>        
      </div>
      <img src={ArtOfFloral} alt="" />
      </div>
      </div>
    </div>
  )
}
