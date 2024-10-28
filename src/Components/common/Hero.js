import React, {useRef,useEffect} from 'react'
import HeroVideo from '../../Components/assets/videos/heroVideo.mp4'
import PlayButton from '../../Components/assets/playButton.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Hero({title,description}) {

  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(imgRef.current, {
      width: '87.5vw',          
      borderRadius: '37px',   
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top center',   
        end: 'bottom top',     
        scrub: true,         
        
      },
    });
  }, []);
  return (
    <div className='pt-[90px] overflow-hidden mb-[150px]'>
      <div className='max-w-[1680px] mx-auto w-[87.5vw] flex justify-between items-center pb-20 leading-[1.05]'>
        <p className='text-[80px] font-SfProDisplayMedium'>{title}</p>
        <p className='text-[28px] font-SfProDisplayMedium font-semibold leading-[1.1428571429] text-[#1D1D1F]'>{description}</p>
      </div>
      <div className='h-[80vh] max-h-[1260px] min-h-[680px] max-w-[1920px] mx-auto overflow-hidden' >
      <video src={HeroVideo} muted playsInline loop controls></video>
      {/* <img src={PlayButton} alt="" /> */}
      </div>
    </div>
  )
}
