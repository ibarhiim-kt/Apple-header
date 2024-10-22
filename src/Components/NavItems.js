import React from 'react'
import {AppleItems} from "../constants/index"

export default function NavItems() {
    
  return (
    <div className='max-w-5xl mx-auto text-[12px] flex flex-col items-center'>
    <div className='pt-16 pb-5 flex justify-between min-w-[900px]'>
      {AppleItems.map((el)=>(
        <div className='flex flex-col items-center'>
            <img src={el.img} alt={el.name}/>
            <p className=' font-normal -tracking-[0.01em] pt-0.5 text-[#000000CC] font-SfProTextLight'>{el.name}</p>
        </div>
      ))}
    </div>
    <div className='max-w-[711px]  text-center flex items-center'>
        <p>Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments.</p>
    </div>
    </div>
  )
}
