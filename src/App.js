
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import IPad from "./Pages/IPad/App"

function App() {
  return (
    <div>
      {/* <div className="fixed bottom-10 right-10 z-50 h-[80px] w-[80px] bg-[red]"></div> */}
      <Header />
      
       <IPad/>      
       {/* <Footer/>  */}
    </div>
  );
}

export default App;
