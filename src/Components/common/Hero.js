import React, { useRef, useEffect, useState } from 'react';
import PlayButton from '../../Components/assets/playButton.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ title, description, heroVideo }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { width: '98.9vw',
          borderRadius:'0px'
         },
        {
          borderRadius:"44px",          
          width: '87.5vw',           
          // ease: 'power3.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 30%',                  
            scrub: true,       
          },
        }
      );
    }
    gsap.set(".heroTextAnima",{y:0, opacity:1})
    gsap.from(".heroTextAnima",{
      duration:0.8,
      opacity:0,
      y:40,
      // stagger:0.2,
      scrollTrigger:{
      trigger:".heroTextAnima",      
    } 
    })
  }, []);

  return (
    
    <div className="relative pt-[90px]  mb-[150px]">
      <div className="heroTextAnima max-w-[1680px] mx-auto w-[87.5vw] flex justify-between items-center pb-20 leading-[1.05] heroGsap">
        <p className="text-[80px] font-SfProDisplayRegular font-semibold">
          {title}
        </p>
        <p className="text-[28px] font-SfProDisplayRegular font-semibold tracking-[0.007em] leading-[1.1428571429] text-[#1D1D1F] min-w-[283.66px]">
          {description}
        </p>
      </div>
       
      <div
        className="heroTextAnima h-[80vh] relative  max-h-[1260px] min-h-[680px] max-w-[1920px] mx-auto" ref={videoRef}
      >      
      <div className='z-20 sticky top-[700px] ml-auto mr-10 w-[36px] h-[36px] bg-[#e8e8ed] rounded-full flex items-center justify-center'>  
          <img src={PlayButton} alt="play button" className=' w-[20px] h-[20px]'/>
      </div>
        <video
          src={heroVideo}
          muted
          playsInline
          loop
          autoPlay
          className="w-full h-full object-cover max-w-[1920px] mx-auto"          
        ></video>                      
      </div>            
    </div>    
  );
}
