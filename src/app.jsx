import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import ServicesCards from "./components/servicesCards.jsx"; 
import CallToAction from "./components/CallToAction";
import CaseStudies from "./components/CaseStudies";  

function App() {
  return (
    <div className="font-inter bg-white text-gray-900">
      <Header />
      <Hero />
      <ServicesCards />  
      <CallToAction />  
      <CaseStudies />  
      <Footer />
    </div>
  );
}

export default App;
