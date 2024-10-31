import React from 'react'
import AppleLogo from '../assets/appleLogoBlack.svg'
import RightArrowIcon from '../assets/rightArrowIcon.svg'

export default function Footer() {

    const headerElements = [
        {shop:["Store","Mac","iPad","iPhone","Watch","Vision","Airpods","TV & Home","AirTag","Accessories","Gift Cards"]},
        {appleWallet:["Wallet","Apple Card","Apple Pay","Apple Cash"]},
        {account:["Manage You Apple Account","Apple Store Account","iCloud.com"]},
        {entertainment:["Apple One","Apple TV+","Apple Music","Apple Arcade","Apple Fitness+","Apple News+","Apple Podcasts","Apple Books","Apple Store"]},
        {appleStore:["Find a Store","Genius Bar","Today at Apple","Group Reservations","Apple Camp","Apple Store App","Certified Refurbished","Apple Trade In","Financing","Career Deals at Apple","Order Status","Shopping Help"]},
        {forBussiness:["Apple and Bussiness","Shop for Bussiness"]},
        {forEducation:["Apple and Education","Shop for k-12","Shop for College"]},
        {forHealthcare:["Apple in Healthcare","Health on Apple Watch","Health Records on iPhone and iPad"]},
        {forGovernment:["Shop for Government","Shop for Veterans and Military"]},
        {appleValues:["Accessibility","Education","Enviornment","Inclusion and Diversity","Privacy","Racial Equity and Justice","Supply Chain"]},
        {aboutApple:["Newsroom","Apple Leadership","Career Opportunities","Investors","Ethics & Compliance","Events","Contact Apple"]}
    ]


  return (
    <div className='bg-[#F5F5F7] text-[12px] font-SfProTextLight'>
      <div className='max-w-[1024px] mx-auto px-[22px]'>
        <div className='flex items-center py-[17px] gap-[11px]'>
            <img src={AppleLogo} alt="Apple Logo" className=' w-[14px]'/>
            <img src={RightArrowIcon} alt="" />
            <p>iPad</p>
        </div>
        <div className='grid grid-cols-5'>
            
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Shop and Learn</p>
                {headerElements.map((el)=>(
                    <div>
                    {el.shop && el.shop.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}                 
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>Apple Wallet</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.appleWallet && el.appleWallet.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}    
            </div>
            </div>
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Account</p>
                {headerElements.map((el)=>(
                    <div>
                    {el.account && el.account.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}  
                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>Entertainment</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.entertainment && el.entertainment.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}  
            </div>
            </div>
            
            <div>
                <p className='mb-[9.6px] font-semibold'>Apple Store</p>
                {headerElements.map((el)=>(
                    <div>
                    {el.appleStore && el.appleStore.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}  
            </div>            
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>For Bussiness</p>
                {headerElements.map((el)=>(
                    <div>
                    {el.forBussiness && el.forBussiness.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                </div> 
                ))}                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Education</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.forEducation && el.forEducation.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                </div> 
                ))}                 
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Healthcare</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.forHealthcare && el.forHealthcare.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                </div> 
                ))}                 
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Government</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.forGovernment && el.forGovernment.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                </div> 
                ))}                  
            </div>
            </div>
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Apple Values</p>
                {headerElements.map((el)=>(
                    <div>
                    {el.appleValues && el.appleValues.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}              
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>About Apple</p>
            {headerElements.map((el)=>(
                    <div>
                    {el.aboutApple && el.aboutApple.map((items)=>(
                    <p className='mb-[9.6px] text-[#000000B8]'>{items}</p>                   
                ))}
                    </div> 
                ))}  
            </div>
            </div>
        </div>
        <div className='pt-[37px] pb-6'>
        <div className='pb-[19px] border-b border-[rgb(0,0,0,0.16)] text-[#000000B8]'>
        More ways to shop: <a href="#" className='text-[#0066cc] underline'>Find an Apple Store</a> or <a href="#" className='text-[#0066cc] underline'>other retailer</a> near you. Or call 1-800-MY-APPLE.</div> 
      </div>
      <div className='flex items-center justify-between pb-[11px] leading-[26px] text-[#000000B8]'>
        <div className='flex items-center'>
        <p className='pr-[30px]'>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <div className='flex items-center -mb-0.5'>
            <p className='pr-[9px] mr-[6px] border-r border-[rgb(0,0,0,0.16)] leading-[10px]'>Privacy Policy</p>
            <p className='pr-[9px] mr-[6px] border-r border-[rgb(0,0,0,0.16)] leading-[10px]'>Terms of Use</p>
            <p className='pr-[9px] mr-[6px] border-r border-[rgb(0,0,0,0.16)] leading-[10px]'>Sales and Refunds</p>
            <p className='pr-[9px] mr-[6px] border-r border-[rgb(0,0,0,0.16)] leading-[10px]'>Legal</p>
            <p className='pr-[9px] mr-[6px] border-r leading-[10px]'>Site Map</p>
        </div>
        </div>
        <p>United States</p>
      </div>
      </div>
      
    </div>
  )
}
