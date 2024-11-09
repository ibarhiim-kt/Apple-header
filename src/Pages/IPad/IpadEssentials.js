import React, { useEffect } from 'react'
import Supernovae from '../../Components/assets/supernovae.png'
import ArtOfFloral from '../../Components/assets/artOfFloral.png'
import rightChivron from '../../Components/assets/rightChivron.svg'
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
    trigger:".ipadEssentialsTextAnima",   
    
  } 
  })
},[])

  return (
    <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className="pb-20 leading-[1.05]">
        <p className="text-[56px] font-SfProDisplayMedium ipadEssentialsTextAnima">iPad essentials.</p>
      </div>

    <div className='grid grid-cols-2 gap-5 relative mx-3 ipadEssentialsTextAnima' >
      <div className='bg-white rounded-[28px] flex flex-col items-center text-center justify-between px-8 pt-8'>
      <div className='pt-6 pb-12 flex flex-col items-center'>
        <p className='font-SfProDisplayMedium text-[28px] mb-0.5 font-semibold'>Apple Pencil</p>
        <p className='mb-0.5  font-SfProTextRegular text-[17px]'>Dream it up. Jot it down.</p>
        <div className='flex item-center'>
          <a href="#" className='text-[#0066CC] font-SfProTextRegular text-[17px]'>Learn more</a>
          <img src={rightChivron} alt="" className="pl-[5px]" />
        </div>
      </div>
      <div>
      <img src={Supernovae} alt="" className='max-w-[732px] h-[456px]' />
      </div>
      </div>     
      <div className='bg-white rounded-[28px] flex flex-col-reverse pb-8 px-8 text-center items-center justify-between'>
      <div className='pb-6 pt-12 flex flex-col items-center'>
        <p className='font-SfProDisplayMedium text-[28px] mb-0.5 font-semibold'>Keyboards for iPad</p>
        <p className='mb-0.5  font-SfProTextRegular text-[17px]'>Type it out. Take it with you.</p>
        <div className='flex item-center '>
          <a href="#" className='text-[#0066CC] font-SfProTextRegular text-[17px]'>Learn more</a>
          <img src={rightChivron} alt="" className="pl-[5px]"/>
        </div>
      </div>
      <img src={ArtOfFloral} alt="" />
      </div>
      </div>
    </div>
  )
}
