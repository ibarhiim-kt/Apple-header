import React, { useState, useRef, useEffect } from 'react';
import appleIntelligence from '../assets/appleIntelligencePng.png';
import Slider from 'react-slick';
import NextBtn from '../../Components/assets/nextButton.svg';
import PreviousBtn from '../../Components/assets/previousButton.svg';
import rightChivron from '../../Components/assets/rightChivron.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ExploreLineup({ content }) {
  const sliderRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const settings = {
    dots: false,
    centerMode: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !buttonRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      if (containerRect.top <= 150 && containerRect.bottom > buttonRect.height) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentRefs = useRef([]);
  useEffect(()=>{
    gsap.set(".exploreLineupAnima",{y:0, opacity:1})
      gsap.from(".exploreLineupAnima",{
        duration:0.8,
        opacity:0,
        y:40,
        scrollTrigger:{
        trigger:".exploreLineupAnima",      
      } 
      })
      
      contentRefs.current.forEach((content, index) => {   
        gsap.set(content, { y: 0, opacity: 1 });   
        gsap.from(content, {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: index * 0.2,
          scrollTrigger: {
          trigger: ".exploreLineupAnima",
          }
        });
      });
    },[content])
  return (
    <div ref={containerRef} className='pt-[150px] py-64 font-SfProTextRegular text-[12px] text-[#1D1D1F] overflow-hidden'>
      <div className="pb-20 max-w-[1680px] mx-auto w-[87.5vw] leading-[1.05] flex items-end justify-between exploreLineupAnima">
        <p className="text-[56px] font-SfProDisplayMedium">Explore the lineup.</p>
        <div className='flex item-center '>
          <a href="#" className='text-[#0066CC] font-SfProTextRegular text-[17px]'>Compare all models</a>
          <img src={rightChivron} alt="" className="pl-[5px]" />
        </div>
      </div>

      <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
        <div className='max-w-[1680px] w-[83vw]'>
          <Slider ref={sliderRef} {...settings}>
            {content.map((el, index) => (
              <div key={index} ref={(el) => (contentRefs.current[index] = el)}>
                <div className={`flex flex-col justify-center items-center text-center w-[372px] ${el.id > 0 ? 'ml-5' : ''}`}>
                  <img src={el.primaryImg} alt="iPad Pro" className='mb-10 h-[340px]'/>
                  <div className='flex items-center gap-[6px]'>

                  
                    <div className={`${index === 1?'bg-[#6B696E]':index===2?'bg-[#6480A3]':index===3?'bg-[#6B696E]':'bg-[#232C23]'} h-[11px] w-[11px]  rounded-full`}></div>
                    <div className={`${index === 1?'bg-[#D7E5E6]':index===2?'bg-[#DE6274]':index===3?'bg-[#D7E5E6]':'bg-[#E3E4E5]'} h-[11px] w-[11px]  rounded-full`}></div>
                  
                    <div className={`${index === 1?'bg-[#E3DEE9]':index===2?'bg-[#F0D95B]':index===3?'bg-[#E3DEE9]':'hidden]'} h-[11px] w-[11px]  rounded-full`}></div>
                    <div className={`${index === 1?'bg-[#E5E0D8]':index===2?'bg-[#E3E4E5]':index===3?'bg-[#E5E0D8]':'hidden]'} h-[11px] w-[11px]  rounded-full`}></div>
                
                  </div>
                  <p className='font-SfProDisplayMedium text-[28px] mt-14'>{el.name}</p>
                  <p className='pt-4 font-SfProTextRegular text-[17px] px-5 tracking-[-0.022em]'>{el.description}</p>
                  <p className='pt-3 font-SfProTextRegular text-[17px]'>{el.prices}</p>
                  <div className='pt-[38px] pb-[54px] font-SfProTextRegular text-[17px] flex items-center border-b border-[gray] w-full justify-center'>
                    <p className='bg-[#0066cc] h-[43.6px] leading-[1.1764805882] flex items-center justify-center px-[22px] rounded-full text-white'>Learn more</p>
                    <div className='flex items-center'>
                    <p className='text-[#0066cc] ml-8'>Buy</p>
                    <img src={rightChivron} alt="" className='pl-[5px] w-[12.25px]'/>
                    </div>
                  </div>
                  <div className='pt-[52px] flex flex-col gap-[44px] items-center'>
                    <div className='max-w-[186.14px] min-h-[170px] tracking-[-0.022em]'>
                      <p className='font-SfProDisplayMedium text-[28px]'>{el.length}</p>
                      <div className='font-SfProTextRegular pt-[0.8em] text-[12px] flex flex-col gap-[0.8em]'>
                        <p>{el.display}</p>
                        <p className={`${el.id > 0 ? 'hidden' : 'inline'}`}>{el.promotion}</p>
                        <p>{el.color}</p>
                        <p>{el.models}</p>
                      </div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={el.chipImg} alt="" className='w-[36px] h-[56px]'/>
                      <p className='pt-[1.1em]'>{el.chipName}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={appleIntelligence} alt="" className='w-[42px] h-[56px]'/>
                      <p className='pt-[1.1em]'>Apple Intelligence!</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={el.cameraImg} alt="" className='w-[36px] h-[56px]'/>
                      <p className='pt-[1.1em]'>{el.cameraName}</p>
                      <p className='pt-[0.8em]'>{el.cameraQuality}</p>
                    </div>
                    <div className='flex flex-col items-center min-h-[114.8px]'>
                      <img src={el.frontCameraImg} alt="" className='h-[56px]'/>
                      <p className='pt-[1.1em]'>{el.frontCameraName}</p>
                      <p className='pt-[0.8em]'>{el.frontCameraQuality}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={el.applePencilImg} alt="" className='w-[15px] h-[56px]'/>
                      <p className='pt-[1.1em]'>{el.applePencilPrimarySupport}</p>
                      <p className='pt-[0.8em]'>{el.applePencilSecondarySupport}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={el.keyboardImg} alt="" className='w-[54px] h-[56px]'/>
                      <p className='pt-[1.1em]'>{el.keyboardName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

    
        <div ref={buttonRef} className={`flex justify-end mt-4 space-x-5 pr-2 pt-8 ${isSticky ? 'fixed bottom-[15px] right-[87px]' : ''}`}>
          <img src={PreviousBtn} alt="previous button" className='bg-[#E9E9EB] rounded-full cursor-pointer' onClick={handlePrev} />
          <img src={NextBtn} alt="next button" className='bg-[#E9E9EB] rounded-full cursor-pointer' onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
