import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NavItems from "./Components/NavItems";
import WatchSeries from "./Components/WatchSeries";
function App() {
  return (
    <div>
      <Header/>
      <div className="bg-[#FAFAFC]">
      <NavItems/>
      </div>
      {/* <Hero/> */}
      {/* <WatchSeries/> */}
    </div>
  );
}

export default App;
