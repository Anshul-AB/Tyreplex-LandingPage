import React from "react";
import Navbar from "./components/routes/Navbar";
import HeroSection from "./components/routes/HeroSection";
import Deals from "./components/routes/Deals";
import Services from "./components/routes/Services";
import Payment from "./components/routes/Payment";
import Footer from "./components/routes/Footer";
import Products from "./components/routes/Products";

const App = () => {
  return (
    <div className="font-primary bg-gray-100 box-border">
      <Navbar />
      <div className="mx-10 md:mx-16">
        <HeroSection />
        <Deals />
        <Services />
        <Products/>
        <Payment />
        <Footer />
      </div>
    </div>
  );
};

export default App;
