import React, {useState,useRef} from 'react'
import appleIntelligence from '../assets/appleIntelligencePng.png'
import Slider from 'react-slick';
import NextBtn from '../../Components/assets/nextButton.svg'
import PreviousBtn from '../../Components/assets/previousButton.svg'

export default function ExploreLineup({content}) {
    const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0.5,
        arrows: false,         
        variableWidth:true,
      };
      const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };
      const isLastSlide = currentSlide >= content.length - 3;
      const isFirstSlide = currentSlide >= content.length - 3;
  return (
    <div className='pt-[150px] font-SfProTextRegular text-[12px] text-[#1D1D1F] overflow-hidden'>    
      <div className="pb-20 max-w-[1680px] mx-auto w-[87.5vw] leading-[1.05] flex items-end justify-between">
        <p className="text-[56px] font-SfProDisplayMedium">Explore the lineup.</p>
        <div>
        <a href="#" className='text-[#0066CC] font-SfProTextRegular text-[17px]'>Compare all models</a>        
        </div>
      </div>
      <div className='max-w-[1680px] mx-auto w-[87.5vw]'>
      <div className='max-w-[1680px] w-[83vw]'>
      <Slider ref={sliderRef} {...settings}>
    {content.map((el)=>(
        <div>
        <div className={` flex flex-col justify-center items-center text-center w-[372px] ${el.id>0?'ml-5':''}`}>
        <img src={el.primaryImg} alt="iPad Pro" className='mb-10 h-[340px]'/>
        <div className='flex items-center gap-[6px]'>
            <div className=' h-[11px] w-[11px] bg-[#232C23] rounded-full'></div>
            <div className='h-[11px] w-[11px] bg-[#E3E4E5] rounded-full'></div>
        </div>
        <p className='font-SfProDisplayMedium text-[28px] mt-14'>{el.name}</p>
        <p className='pt-4 font-SfProTextRegular text-[17px] px-5 tracking-[-0.022em]'>{el.description}</p>
        <p className='pt-3 font-SfProTextRegular text-[17px] font-semibold'>{el.prices}</p>
        <div className='pt-[38px] pb-[54px] font-SfProTextRegular text-[17px] flex items-center border-b border-[#232c23]'>
            <p className='bg-[#0066cc] h-[43.6px] leading-[1.1764805882] flex items-center justify-center px-[22px] rounded-full text-white'>Learn more</p>
            <p className='text-[#0066cc] ml-4'>Buy</p>
            
        </div>
        
        <div className='pt-[52px] flex flex-col gap-[44px] items-center'>
            <div className='max-w-[186.14px] min-h-[170px] tracking-[-0.022em]'>
            <p className='font-SfProDisplayMedium text-[28px]'>{el.length}</p>
            <div className='font-SfProTextRegular pt-[0.8em] text-[12px] flex flex-col gap-[0.8em]'>
            <p>{el.display}</p>
            <p className={`${el.id>0?'hidden':'inline'}`}>{el.promotion}</p>
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
                <p className='pt-[1.1em]'>Apple Interlligence!</p>
            </div>
            
            <div className='flex flex-col items-center'>
                <img src={el.cameraImg} alt="" className='w-[36px] h-[56px]'/>
                <p className='pt-[1.1em]'>{el.cameraName}</p>
                <p className='pt-[0.8em]'>{el.cameraQuality}</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={el.frontCameraImg} alt="" className='w-[42px] h-[56px]'/>
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
      <div className="flex justify-end mt-4 space-x-5 pr-2 pt-8">            
            <img src={PreviousBtn} alt="previous button" className={`${isLastSlide<=-3?'bg-[#F3F3F4]':'bg-[#E9E9EB]'} rounded-full cursor-pointer`} onClick={handlePrev}/>
          <img src={NextBtn} alt="next button" className={`${isLastSlide?'bg-[#F3F3F4]':'bg-[#E9E9EB]'} rounded-full cursor-pointer`} onClick={handleNext}/>         
        </div>
      </div>
</div>
         
  )
}