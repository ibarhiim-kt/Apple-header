import React, { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function NavItems({ items, message }) {

  useEffect(()=>{
  gsap.set(".navTextAnima",{y:0, opacity:1})
    gsap.from(".navTextAnima",{
      duration:0.8,
      opacity:0,
      y:-50,
      scrollTrigger:{
      trigger:".navTextAnima",      
    } 
    })
  })
  return (
    <div className="flex flex-col items-center text-[12px]">
      <div className="max-w-5xl mx-auto">
        <div className="pt-16 pb-5 flex justify-between min-w-[900px]">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt={item.name} />
              <p className="font-normal -tracking-[0.01em] pt-0.5 text-[#000000CC] font-SfProTextLight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {message && (
        <div className="overflow-hidden w-full bg-white">
        <div className="navTextAnima text-center flex items-center py-[9px] bg-[#F5F5F7] ">
          <p className="max-w-[811px] mx-auto leading-[1.3333733333] font-SfProTextLight">
            {message}
          </p>         
        </div>
        </div>
      )}
    </div>
  );
}
