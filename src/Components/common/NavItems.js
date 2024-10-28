import React from "react";

export default function NavItems({ items, message }) {
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
        <div className="text-center flex items-center py-[9px] bg-[#F5F5F7] w-full">
          <p className="max-w-[811px] mx-auto leading-[1.3333733333]">
            {message}
          </p>
          {/* <a href="">Learn more</a> */}
        </div>
      )}
    </div>
  );
}
