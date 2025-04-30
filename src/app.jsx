import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import ServicesCards from "./components/servicesCards.jsx";
import CallToAction from "./components/CallToAction";
import CaseStudies from "./components/CaseStudies.jsx";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="font-inter bg-white text-gray-900">
        <Header />

        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesCards />
                <CallToAction />
                <CaseStudies />
              </>
            }
          />

          
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
