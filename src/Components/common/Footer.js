import React from 'react'
import AppleLogo from '../assets/appleLogoBlack.svg'

export default function Footer() {

  return (
    <div className='bg-[#F5F5F7] text-[12px] font-SfProTextRegular'>
      <div className='max-w-[1024px] mx-auto px-[22px]'>
        <div className='flex items-center py-[17px]'>
            <img src={AppleLogo} alt="Apple Logo" />
            <p className='pl-4'>iPad</p>
        </div>
        <div className='grid grid-cols-5'>
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Shop and Learn</p>
                <p className='mb-[9.6px]'>Store</p>
                <p className='mb-[9.6px]'>Mac</p>
                <p className='mb-[9.6px]'>iPad</p>
                <p className='mb-[9.6px]'>iPhone</p>
                <p className='mb-[9.6px]'>Watch</p>
                <p className='mb-[9.6px]'>Vision</p>
                <p className='mb-[9.6px]'>Airpods</p>
                <p className='mb-[9.6px]'>TV & Home</p>
                <p className='mb-[9.6px]'>Air Tag</p>
                <p className='mb-[9.6px]'>Accessories</p>
                <p className='mb-[9.6px]'>Gift Cards</p>
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>Apple Wallet</p>
                <p className='mb-[9.6px]'>Wallet</p>
                <p className='mb-[9.6px]'>Apple Card</p>
                <p className='mb-[9.6px]'>Apple Pay</p>
                <p className='mb-[9.6px]'>Apple Cash</p>
            </div>
            </div>
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Account</p>
                <p className='mb-[9.6px]'>Manage Your Apple Account</p>
                <p className='mb-[9.6px]'>Apple Store Account</p>
                <p className='mb-[9.6px]'>iCloud.com</p>
                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>Entertainment</p>
                <p className='mb-[9.6px]'>Apple One</p>
                <p className='mb-[9.6px]'>Apple TV+</p>
                <p className='mb-[9.6px]'>Apple Music</p>
                <p className='mb-[9.6px]'>Apple Arcade</p>
                <p className='mb-[9.6px]'>Apple Fitness+</p>
                <p className='mb-[9.6px]'>Apple News+</p>
                <p className='mb-[9.6px]'>Apple Podcasts</p>
                <p className='mb-[9.6px]'>Apple Books</p>
                <p className='mb-[9.6px]'>Apple Store</p>
            </div>
            </div>
            
            <div>
                <p className='mb-[9.6px] font-semibold'>Apple Store</p>
                <p className='mb-[9.6px]'>Find a Store</p>
                <p className='mb-[9.6px]'>Genius Bar</p>
                <p className='mb-[9.6px]'>Today at Apple</p>
                <p className='mb-[9.6px]'>Group Reservations</p>
                <p className='mb-[9.6px]'>Apple Camp</p>
                <p className='mb-[9.6px]'>Apple Store App</p>
                <p className='mb-[9.6px]'>Certified Refurbished</p>
                <p className='mb-[9.6px]'>Apple Trade In</p>
                <p className='mb-[9.6px]'>Financing</p>
                <p className='mb-[9.6px]'>Career Deals at Apple</p>
                <p className='mb-[9.6px]'>Order Status</p>
                <p className='mb-[9.6px]'>Shopping Help</p>
            </div>
            
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>For Bussiness</p>
                <p className='mb-[9.6px]'>Apple and Bussiness</p>
                <p className='mb-[9.6px]'>Shop for Bussiness</p>               
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Education</p>
                <p className='mb-[9.6px]'>Apple and Education</p>
                <p className='mb-[9.6px]'>Shop for K-12</p>
                <p className='mb-[9.6px]'>Shop for College</p>                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Healthcare</p>
                <p className='mb-[9.6px]'>Apple in Healthcare</p>
                <p className='mb-[9.6px]'>Health on Apple Watch</p>
                <p className='mb-[9.6px]'>Health Records on iPhone and iPad</p>                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>For Government</p>
                <p className='mb-[9.6px]'>Shop for Government</p>
                <p className='mb-[9.6px]'>Shop for Veterans and Military</p>
                
            </div>
            </div>
            <div>
            <div>
                <p className='mb-[9.6px] font-semibold'>Apple Values</p>
                <p className='mb-[9.6px]'>Accessibility</p>
                <p className='mb-[9.6px]'>Education</p>
                <p className='mb-[9.6px]'>Enviornment</p>
                <p className='mb-[9.6px]'>Inclusion and Diversity</p>
                <p className='mb-[9.6px]'>Privacy</p>
                <p className='mb-[9.6px]'>Racial Equity and Justice</p>
                <p className='mb-[9.6px]'>Supply Chain</p>                
            </div>
            <div className='pt-6'>
            <p className='mb-[9.6px] font-semibold'>About Apple</p>
                <p className='mb-[9.6px]'>Newsroom</p>
                <p className='mb-[9.6px]'>Apple Leadership</p>
                <p className='mb-[9.6px]'>Career Opportunities</p>
                <p className='mb-[9.6px]'>Investors</p>
                <p className='mb-[9.6px]'>Ethics & Compliance</p>
                <p className='mb-[9.6px]'>Events</p>
                <p className='mb-[9.6px]'>Contact Apple</p>
            </div>
            </div>
        </div>
        <div className='pt-[37px] pb-[11px]'>
        <div className='pb-[19px] mb-4 border-b border-[rgb(0,0,0,0.16)]'>
        More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a></div>
      </div>
      </div>
      
    </div>
  )
}
