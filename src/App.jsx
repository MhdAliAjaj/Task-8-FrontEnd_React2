import Hero from "./components/Hero/Hero";
// import HostingPricing from "./Pages/HostingPricing/HostingPricing";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./components/OurServices/OurServices";
import Footer from "./components/Footer/Footer";
import HostingPricing from "./components/HostingPricing/HostingPricing";
import Content from "./Pages/Content";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <>
       <header>
        <Navbar />
        <Hero />
      </header>
      

        {/* <Outlet /> */}
     <Content />
      
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;

//  {/* <header>
//     <Navbar />
//     <Hero />
//   </header>
//   <main>
//     {/* <Content /> */}
//     <Outlet />
//   </main>
//   <footer>
//     <Footer />
//   </footer> */}
