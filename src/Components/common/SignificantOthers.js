import React, {useState} from 'react'
import AccordianArrow from '../../Components/assets/accordianArrow.svg'
import SignificantIpadIphone from '../../Components/assets/significant_ipad_iphone.jpg'
import SecondAccordionImg from '../assets/secondaryAccordionImg.jpg'
import TertiaryAccordionImg from '../assets/tertiaryAccordionImg.jpg'
export default function SignificantOthers({items}) {
    const [primaryAccordion, setPrimaryAccordion] = useState(true);
    const [secondaryAccordion, setSecondaryAccordion] = useState(false);
    const [tertiaryAccordion, setTertiaryAccordion] = useState(false);

    const handlePrimaryAccordion=()=>{
        setPrimaryAccordion(true);
        setSecondaryAccordion(false);
        setTertiaryAccordion(false);
    }
    const handleSecondaryAccordion=()=>{
        setPrimaryAccordion(false);
        setSecondaryAccordion(true);
        setTertiaryAccordion(false);
    }
    const handleTertiaryAccordion=()=>{
        setPrimaryAccordion(false);
        setSecondaryAccordion(false);
        setTertiaryAccordion(true);
    }
  return (
    <div className='py-[150px] max-w-[1680px] mx-auto w-[87.5vw] '>
      <div className="pb-20 text-[56px] font-SfProDisplayMedium max-w-[528px]">Significant others</div>
        <div className='bg-[#F5F5F7] flex rounded-[28px] overflow-hidden'>
            
          
            <div className='min-w-[590px] flex flex-col items-center justify-center '>
            {items.map((el,index)=>(
                <div className={`mb-6 pb-6 border-b border-[#E3E3E7] w-[350px]`}>
                <div className='flex items-center justify-between' onClick={
            index === 0
              ? handlePrimaryAccordion
              : index === 1
              ? handleSecondaryAccordion
              : handleTertiaryAccordion
          }>
                <p className='font-SfProDisplayMedium text-[28px] leading-[1.1428571429] font-semibold'>{el.accordionTitle}</p>            
                <img src={AccordianArrow} alt="arrow"/>
                </div>
                {(index === 0 && primaryAccordion) ||
                (index === 1 && secondaryAccordion) ||
                (index === 2 && tertiaryAccordion)?(
                <p className='max-w-[323px] font-SfProTextLight -tracking-[0.022em] leading-[1.4705882353] text-[17px] pt-[13.6px]'>{el.description}</p>
                ):('')}
                </div>  
                 ))}         
            </div>
        
        {items.map((el,index)=>(
            <div>
                {(index === 0 && primaryAccordion) ||
                (index === 1 && secondaryAccordion) ||
                (index === 2 && tertiaryAccordion)?(
                <img src={el.img} alt="image" className='max-w-[1090px] min-h-[754px] object-cover'/>
                ):('')}                
            </div>        
            ))}
    
           
        </div>
    </div>
  )
}
