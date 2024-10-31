import Hero from "../../Components/common/Hero";
import NavItems from "../../Components/common/NavItems";
import HeroVideo from '../../Components/assets/videos/heroVideo.mp4'
import { AppleItems,AppleSliderContent, IPadModelComparison,AppleBestForIpad, Significant, IpadLinks } from "../../constants";

import AppleSlider from "../../Components/common/AppleSlider";
import ExploreLineup from "../../Components/common/ExploreLineup";
import IpadEssentials from "./IpadEssentials";
import AppleBestPlace from "../../Components/common/AppleBestPlace";
import SignificantOthers from "../../Components/common/SignificantOthers";
import Links from "../../Components/common/Links";
import Detail from "./Detail";
import rightChivron from '../../Components/assets/rightChivron.svg'

function App() {
  return (
    <div>    
      <div className="bg-[#fafafc]">
     <NavItems
          items={AppleItems}
          
          message={<div>Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments.- <a href="#" className="text-[#0066cc] inline-flex items-center hover:underline">Learn more <img src={rightChivron} alt="" className="pl-[3.6px]" /></a> 
          </div>}
        />
      </div>
       <Hero title="iPad" description={
    <>
     Touch, draw, and type <br /> on one magical device.
    </>
    
  } heroVideo={HeroVideo}/>
      <AppleSlider title="Get To know iPad." items={AppleSliderContent}/>
      {/* <div className="bg-[#F5F5F7]">
      <ExploreLineup content={IPadModelComparison}/>
      <IpadEssentials/>
      <AppleBestPlace items={AppleBestForIpad}/>
      </div> */}
      {/* <SignificantOthers items={Significant}/> */}
      {/* <Links PrimaryColLinks={IpadLinks}/> */}
      {/* <Detail/>  */}
    </div>
  );
}

export default App;
