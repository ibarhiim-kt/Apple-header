import Hero from "../../Components/common/Hero";
import NavItems from "../../Components/common/NavItems";
import { AppleItems,AppleSliderContent, IPadModelComparison } from "../../constants";

import AppleSlider from "../../Components/common/AppleSlider";
import ExploreLineup from "../../Components/common/ExploreLineup";

function App() {
  return (
    <div>    
      <div className="bg-[#fafafc]">
     <NavItems
          items={AppleItems}
          message="Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments."
        />
      </div>
      <Hero title="iPad" description={
    <>
     Touch, draw, and type <br /> on one magical device.
    </>
  }/>
      <AppleSlider title="Get To know iPad." items={AppleSliderContent}/>
      <div className="bg-[#F5F5F7]">
      <ExploreLineup content={IPadModelComparison}/>
      </div>
    </div>
  );
}

export default App;
