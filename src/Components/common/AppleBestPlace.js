import React, {useState,useRef,useEffect} from 'react'
import Slider from 'react-slick';
import NextBtn from '../assets/nextButton.svg'
import PreviousBtn from '../assets/previousButton.svg'
import PlusButton from '../assets/cardPlusBtn.svg'
import RightChivron from '../assets/rightChivron.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function AppleBestPlace({items}) {
    const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    centerMode: false,  
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const contentRefs = useRef([]);
  useEffect(()=>{
    gsap.set(".appleBestPlaceAnima",{y:0, opacity:1})
      gsap.from(".appleBestPlaceAnima",{
        duration:0.8,
        opacity:0,
        y:40,
        scrollTrigger:{
        trigger:".appleBestPlaceAnima",
      }
      })
      
      contentRefs.current.forEach((item, index) => {   
        gsap.set(item, { y: 0, opacity: 1 });   
        gsap.from(item, {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: index * 0.2,
          scrollTrigger: {
          trigger: ".appleBestPlaceAnima",
          }
        });
      });
    },[items])
  return (
    <div className='overflow-hidden py-[150px]'>
      <div className="pb-20 max-w-[1680px] mx-auto w-[87.5vw] leading-[1.05] flex items-end justify-between appleBestPlaceAnima">
        <p className="text-[56px] font-SfProDisplayMedium max-w-[528px]">Why Apple is the best place to buy iPad.</p>        
        <div className='flex item-center '>
          <a href="#" className='text-[#0066CC] font-SfProTextRegular text-[17px]'>Shop iPad</a>
          <img src={RightChivron} alt="" className="pl-[5px]" />
        </div>
      </div>
      <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className="ml-2 max-w-[1680px] w-[83vw]">
        <Slider ref={sliderRef} {...settings}>
          {items.map((el, index) => (
            <div key={index} className="relative h-[324.6px] rounded-[28px] pt-8 pl-8 pr-[77px] pb-[57px] bg-white mr-[22px] cursor-pointer slick-slide" ref={(el) => (contentRefs.current[index] = el)}>
              <img src={el.img} alt="" className="object-cover h-[56px]"/>
              <div>
                <div className='max-w-[296px]'>
                <p className='font-SfProDisplayMedium text-[28px] pt-[9px] leading-[1.1428571429] font-semibold'>{el.reason}</p>
                <p className='font-SfProTextLight font-medium -tracking-[0.022em] leading-[1.2353641176] text-[17px] pt-[13.6px] pb-[30px] '>{el.description}</p>
                </div> 
                <div className='absolute right-5 bottom-5 bg-[#37373A] rounded-full h-[36px] w-[36px] flex items-center justify-center'>    
                <img src={PlusButton} alt="plus button"/>
                </div>               
              </div>              
            </div>
          ))}
        </Slider>
        </div>
        <div className="flex justify-end mt-4 space-x-5 pr-2 pt-8">            
            <img src={PreviousBtn} alt="previous button" className={`bg-[#e8e8ed] rounded-full cursor-pointer`} onClick={handlePrev}/>
          <img src={NextBtn} alt="next button" className={`bg-[#e8e8ed] rounded-full cursor-pointer`} onClick={handleNext}/>         
        </div>
        </div>
    </div>
  )
}
