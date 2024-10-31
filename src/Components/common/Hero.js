import React, { useRef, useEffect } from 'react';
import PlayButton from '../../Components/assets/playButton.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ title, description, heroVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { width: '1920px' },
        {
          width: '1200px', 
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 55%',          
            scrub: true, 
           
          },
        }
      );
    }
  }, []);

  return (
    <div className="pt-[90px] overflow-hidden mb-[150px]">
      <div className="max-w-[1680px] mx-auto w-[87.5vw] flex justify-between items-center pb-20 leading-[1.05]">
        <p className="text-[80px] font-SfProDisplayRegular font-semibold">
          {title}
        </p>
        <p className="text-[28px] font-SfProDisplayRegular font-semibold tracking-[0.007em] leading-[1.1428571429] text-[#1D1D1F] min-w-[283.66px]">
          {description}
        </p>
      </div>
      <div
        className="h-[80vh] max-h-[1260px] min-h-[680px] max-w-[1920px] mx-auto overflow-hidden"        
      >
        <video
          src={heroVideo}
          muted
          playsInline
          loop
          controls
          className="w-full h-full object-cover max-w-[1920px] mx-auto"
          ref={videoRef}  
        ></video>
      </div>
    </div>
  );
}
