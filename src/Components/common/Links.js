import React from 'react';

// Title Section Component
const TitleSection = ({ title }) => (
  <p className="mb-[70px] text-[56px] font-SfProDisplayMedium">{title}</p>
);

// Link Group Component
const LinkGroup = ({ title, links, textSize = 'text-[28px]', linkColor = 'text-[#6E6E73]' }) => (
  <div>
    <p className={`font-SfProTextRegular text-[12px] mb-[13px] ${linkColor}`}>{title}</p>
    <div className={`flex flex-col font-SfProTextRegular ${textSize}`}>
      {links.map((link, index) => (
        <LinkItem key={index} text={link} />
      ))}
    </div>
  </div>
);

// Link Item Component
const LinkItem = ({ text }) => (
  <p className="mb-[11px] leading-[32.8px]">{text}</p>
);

// Main Links Component
export default function Links({ PrimaryColLinks }) {
  const exploreLinks = [
    'Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad', 'iPad mini', 'Apple Pencil', 'Keyboards',
    'Compare iPad', 'Why iPad'
  ];
  const shopLinks = ['Shop iPad', 'iPad Accessories', 'Apple Trade In', 'Financing'];
  const moreLinks = [
    'iPad Support', 'AppleCare+ for iPad', 'iPadOS 18', 'Apple Intelligence',
    'Apps by Apple', 'iCloud+', 'Education'
  ];

  return (
    <div className="bg-[#FAFAFC]">
      <div className="max-w-[1680px] w-[87.5vw] mx-auto py-[150px]">
        <TitleSection title="iPad" />
        
        <div className="flex gap-[88px]">
          {/* Left Column: Explore iPad */}
          <LinkGroup title="Explore iPad" links={exploreLinks} textSize="text-[28px]" />
          
          {/* Right Column: Shop and More Links */}
          <div className="grid grid-cols-2 gap-[44px]">
            <LinkGroup title="Shop iPad" links={shopLinks} textSize="text-[14px]" />
            <LinkGroup title="More from iPad" links={moreLinks} textSize="text-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
