import React, {useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import appleLogo from './assets/appleLogo.svg'
import searchIcon from './assets/searchIcon.svg'
import bagIcon from './assets/bagIcon.svg'

const Header = () => {

  const menuItems = [
    {
      name: 'Store',
      columns: [
        { title: 'Shop', links: ['Shop the Latest', 'Mac', 'iPad','iPhone', 'Apple Watch','Apple Vision Pro','Accessories'] },
        { title: 'Quick Links', links: ['Find a Store', 'Order Status', 'Apple Trade In','Financing'] },
        { title: 'Shop Special Stores', links: ['Certified Refurbished', 'Education', 'Bussiness','Veterans and Military','Government'] },
      ],
    },
    {
      name: 'Mac',
      columns: [
        { title: 'Explore Mac', links: ['Explore All Mac', 'MacBook Air', 'MacBook Pro','iMac','Mac mini','Mac Studio','Max Pro','Displays'] },
        { title: 'Shop Mac', links: ['Shop Mac', 'Help Me Choose', 'Mac Accessories','Apple Trade In','Financing'] },
        { title: 'More from Mac', links: ['Mac Support', 'Apple Care+ for Mac', 'macOS sequoia','Apple Intelligence','Apps by Apple','Continuity','iCloud+','Mac for Business','Education'] },
      ],
    },
    {
        name: 'iPad',
        columns: [
          { title: 'Explore iPad', links: ['Explore All iPad', 'iPad Pro','iPad Air','iPad','iPad mini','Apple Pencils','Keyboards','Compare iPad','Why iPad'] },
          { title: 'Shop iPad', links: ['Shop iPad','iPad Accessories','Apple Trade In','Financing'] },
          { title: 'More from iPad', links: ['iPad Support','AppleCare+ for iPad','iPadOS 18','Apple Intelligence','Apps by Apple','iCloud+','Education'] },
        ],
      },
      {
        name: 'iPhone',
        columns: [
          { title: 'Explore iPhone', links: ['Explore All iPhone','iPhone 16 Pro','iPhone 16','iPhone 15','iPhone 14','iPhone SE','Compare iPhone','Switch from Android'] },
          { title: 'Shop iPhone', links: ['Shop iPhone','iPhone Accessories','Apple Trade In','Carrier Deals at Apple','Financing'] },
          { title: 'More from iPhone', links: ['iPhone Support','AppleCare+ for iPhone','iOS 18','Apple Intelligence','Apps by Apple','iPhone Privacy','iCloud+','Wallet, Pay, Card','Siri'] },
        ],
      },
      {
        name: 'Watch',
        columns: [
          { title: 'Explore Watch', links: ['Explore All Apple Watch','Apple Watch Series 10','Apple Watch Ultra 2','Apple Watch SE','Apple Watch Nike','Apple Watch','Compare Watch','Why Apple Watch'] },
          { title: 'Shop Watch', links: ['Shop Apple Watch','Apple Watch Studio','Apple Watch Bands','Apple Watch Accessories','Apple Trade In','Financing'] },
          { title: 'More from Watch', links: ['Apple Watch Support','AppleCare+','watchOS 11','Apple Watch For Your Kids','Apps by Apple','Apple Fitness+'] },
        ],
      },
      {
        name: 'Vision',
        columns: [
          { title: 'Explore Vision', links: ['Explore Apple Vision Pro','Guided Tour','Tech Specs'] },
          { title: 'Shop Vison', links: ['Shop Apple Vision Pro','Apple Vision Pro Accessories','Book a Demo','Financing'] },
          { title: 'More from Vision', links: ['Apple Vision Pro Support','AppleCare+','visionOS 2'] },
        ],
      },
      {
        name: 'AirPods',
        columns: [
          { title: 'Explore AirPods', links: ['Explore All AirPods','AirPods 4','AirPods Pro 2','AirPods Max 2','compare AirPods'] },
          { title: 'Shop AirPods', links: ['Shop AirPods','AirPods Accessories'] },
          { title: 'More from AirPods', links: ['AirPods Support','AppleCare+ for Headphones','Hearing Health','Apple Music'] },
        ],
      },
      {
        name: 'TV & Home',
        columns: [
          { title: 'Explore TV & Home', links: ['Explore TV & Home','Apple TV 4k','HomePod','HomePod mini'] },
          { title: 'Shop TV & Home', links: ['Shop Apple TV 4k','Shop HomePod','Shop HomePod mini','Shop Siri Remote','TV & Home Accessories'] },
          { title: 'More from TV & Home', links: ['Apple TV Support','HomePod Support','AppleCare+','Apple TV app','Apple TV+','Home app','Apple Music','Siri','AirPlay'] },
        ],
      },
      {
        name: 'Entertainment',
        columns: [
          { title: 'Explore Entertainment', links: ['Explore Entertainment','Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Fitness+','Apple News+','Apple Podcasts','Apple Books','App Store'] },
          { title: 'Support', links: ['Apple TV+ Support','Apple Music Support'] },         
        ],
      },
      {
        name: 'Accessories',
        columns: [
          { title: 'Shop Accessories', links: ['Shop All Accessories','Mac','iPad','iPhone','Apple Watch','Apple Vision Pro','AirPods','TV & Home'] },
          { title: 'Explore Accessories', links: ['Made by Apple','Beats by Dr. Dre','AirTag'] },         
        ],
      },
      {
        name: 'Support',
        columns: [
          { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','Apple Vision Pro','AirPods','Music','TV','Explore Support'] },
          { title: 'Get Help', links: ['Community','Check Coverage','Repair','Contact Us'] },
          { title: 'Helpful Topics', links: ['Get Applecare+','Apple Account and Password','Billing and Subscription','Find My','Accessability'] },
        ],
      },     
    
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contentRef = useRef(null);
  const [dynamicHeight, setDynamicHeight] = useState(44);

  useEffect(() => {
    if (hoveredIndex !== null && contentRef.current) {
      const newHeight = contentRef.current.scrollHeight + 30; // Adjusting the height dynamically with pb-[84px]
      setDynamicHeight(newHeight);
    } else {
      setDynamicHeight(44); // Reset to default header height when no link is hovered
    }
  }, [hoveredIndex]); // Recalculate height whenever hoveredIndex changes

  const headerAnimation = useSpring({
    height: dynamicHeight,
    backgroundColor: '#161617',
    config: { tension: 200, friction: 15, clamp:true },
  });
  

  return (
    <div>
        {hoveredIndex!==null?(
        <div className='blur w-full h-full fixed top-0 right-0 bottom-0 left-0 z-20'></div>
    ):('')}
    <animated.header
      style={{...headerAnimation}}
    // ${hoveredIndex!==null?'trigger':'h-[44px]'}
      className={`absolute z-50 bg-[#333336] w-full text-white accordion-content overflow-hidden `} 
      onMouseLeave={() => setHoveredIndex(null)}
    >        
      <nav className="container mx-auto px-[22px] max-w-5xl text-[#E8E8ED]">
        
        <ul className="flex justify-between items-center">
        <img src={appleLogo} alt="apple logo" className='cursor-pointer' onMouseEnter={() => setHoveredIndex(null)}/>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}              
              className="relative text-[12px]"
            >
              <a href="#" className="hover:text-[#ffffff]">
                {item.name}
              </a>              
            </li>
          ))}
           <img src={searchIcon} alt="search icon" className='cursor-pointer' onMouseEnter={() => setHoveredIndex(null)}/>
           <img src={bagIcon} alt="bag icon" className='cursor-pointer' onMouseEnter={() => setHoveredIndex(null)}/>
        </ul>       
      </nav>
      <div className='max-w-5xl mx-auto pl-[22px]' ref={contentRef}> 
      {hoveredIndex !== null && (
        <Dropdown columns={menuItems[hoveredIndex].columns} />
      )}       
      </div>
    </animated.header>
    </div>
  );
};

const Dropdown = ({ columns }) => {
  const dropdownAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-10px)' },
    config: { tension: 150, friction: 20 },
  });
    
  return (
    <animated.div
      style={dropdownAnimation}
      className="pt-10 pb-[84px] flex gap-[88px] "
    >
      {columns.map((column, index) => (
        <div key={index}>
          <p className="text-[12px] text-[#86868B] mb-4">{column.title}</p>
          <ul>
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className={`block leading-[100%] text-white font-semibold ${index===0?'text-[24px] pb-[14px] ':'text-[12px] pb-3'}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </animated.div>
  );
};

export default Header;
