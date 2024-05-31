import Hero from "./components/Hero/Hero";
// import HostingPricing from "./Pages/HostingPricing/HostingPricing";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./Pages/OurServices/OurServices";
import Footer from "./components/Footer/Footer";
import HostingPricing from "./Pages/HostingPricing/HostingPricing";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <OurServices />
        <HostingPricing />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
