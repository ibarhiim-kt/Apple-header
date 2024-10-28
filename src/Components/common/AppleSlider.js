import React, {useState, useRef } from 'react';
import Slider from 'react-slick';
import NextBtn from '../../Components/assets/nextButton.svg'
import PreviousBtn from '../../Components/assets/previousButton.svg'
import PlusButton from '../../Components/assets/cardPlusBtn.svg'

export default function AppleSlider({title,items}) {
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

  // const imgSlider = [AppleIntelligence, Productivity, Creativity, Learning, Entertainment, ApplePencil, iPadOsApps];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const isLastSlide = currentSlide >= items.length - 3;
  const isFirstSlide = currentSlide >= items.length - 3;
  return (
    <div className="overflow-hidden mb-[150px]">
      <div className="max-w-[1680px] mx-auto w-[87.5vw] leading-[1.05] pb-20">
        <p className="text-[56px] font-SfProDisplayMedium">{title}</p>
      </div>
      <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className={`ml-2 max-w-[1680px] w-[83vw]`}>
        <Slider ref={sliderRef} {...settings}>
          {items.map((el, index) => (
            <div key={index} className="h-[740px] mr-[22px] relative cursor-pointer slick-slide">
              <img src={el.img} alt="" className="w-full h-full object-cover rounded-[28px] absolute z-10" />
              <div className='absolute p-8 z-50 text-white w-full h-full'>
                <div>
                <p className='font-SfProTextLight font-semibold text-[17px]'>{el.sliderTitle}</p>
                <p className='font-SfProDisplayMedium text-[28px] pt-2 leading-[1.1428571429]'>{el.sliderDescription}</p>
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
            <img src={PreviousBtn} alt="previous button" className={`${isLastSlide<=-3?'bg-[#F3F3F4]':'bg-[#E9E9EB]'} rounded-full cursor-pointer`} onClick={handlePrev}/>
          <img src={NextBtn} alt="next button" className={`${isLastSlide?'bg-[#F3F3F4]':'bg-[#E9E9EB]'} rounded-full cursor-pointer`} onClick={handleNext}/>         
        </div>
        
      </div>
    </div>
  );
}