import Hero from "./components/Hero/Hero";
import HostingPricing from "./components/HostingPricing/HostingPricing";
import Navbar from "./components/Navbar/Navbar";
import OurServices from "./components/OurServices/OurServices";
import Footer from "./components/Footer/Footer";

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
