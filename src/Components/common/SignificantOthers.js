import React, { useState, useRef, useEffect } from 'react';
import BottomChivron from '../assets/bottomChivron.svg';

export default function SignificantOthers({ items }) {
  const [activeIndex, setActiveIndex] = useState(0); // Set initial activeIndex to 0
  const [scrollHeight, setScrollHeight] = useState('');
  const conten = useRef([]);

  useEffect(() => {
    // Update scrollHeight when the component mounts or activeIndex changes
    if (conten.current[activeIndex]) {
      setScrollHeight(`${conten.current[activeIndex].scrollHeight}px`);
    }
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    // Only set a new index if it's different from the current one
    if (activeIndex !== index) {
      setActiveIndex(index);
    } 
  };

  return (
    <div className="py-[150px] max-w-[1680px] mx-auto w-[87.5vw]">
      <div className="pb-20 text-[56px] font-SfProDisplayMedium max-w-[528px]">
        Significant others
      </div>
      <div className="bg-[#F5F5F7] flex rounded-[28px] overflow-hidden">
        <div className="min-w-[590px] flex flex-col items-center justify-center">
          {items.map((el, index) => (
            <div
              key={index}
              className={`overflow-hidden mb-6 pb-6 ${index === 0 ? 'mt-6 pt-8' : ''} ${
                index > 1 ? 'border-0' : 'border-b'
              } border-[#E3E3E7] w-[350px]`}
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleAccordion(index)} // Trigger toggle for the clicked item
              >
                <p className="font-SfProDisplayMedium text-[28px] leading-[1.1428571429] ">
                  {el.accordionTitle}
                </p>
                <img
                  src={BottomChivron}
                  alt="arrow"
                  className={`${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </div>

              <p
                className={`max-w-[318px] font-SfProTextRegular -tracking-[0.022em] leading-[1.4705882353] text-[17px] accordionc ${
                  activeIndex === index ? 'pt-[16px]' : 'pt-0'
                }`}
                ref={(elRef) => (conten.current[index] = elRef)} // Ref for each accordion content
                style={{
                  maxHeight: `${activeIndex === index ? scrollHeight : '0px'}`,
                }}
              >
                {el.description}
              </p>
            </div>
          ))}
        </div>
        <div className={`max-w-[1090px] min-h-[754px]`}>
          {items.map((el, index) => (
            <div key={index}>
              <img
                src={el.img}
                alt="image"
                className={`min-h-[754px] max-w-[1090px] ${activeIndex !== index ? 'hidden' : 'inline'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
