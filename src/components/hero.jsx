import React from "react";
import illustration from "../assets/illustration.svg";
import amazon from "../assets/amazon.svg";
import dribbble from "../assets/dribbble.svg";
import hubspot from "../assets/hubspot.svg";
import notion from "../assets/notion.svg";
import netflix from "../assets/netflix.svg";
import zoom from "../assets/zoom.svg";

function Hero() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-16">
      {/* Contenu à gauche (titre, texte, bouton) */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold">Navigating the digital landscape for success</h2>
        <p className="text-gray-600">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg">Book a consultation</button>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={illustration} alt="Illustration" className="w-full" />
      </div>

      {/* Footer intégré dans Hero */}
      <footer className="flex justify-center space-x-8 py-8 border-t mt-16">
        <img src={amazon} alt="Amazon" className="h-6" />
        <img src={dribbble} alt="Dribbble" className="h-6" />
        <img src={hubspot} alt="Hubspot" className="h-6" />
        <img src={notion} alt="Notion" className="h-6" />
        <img src={netflix} alt="Netflix" className="h-6" />
        <img src={zoom} alt="Zoom" className="h-6" />
      </footer>
    </main>
  );
}

export default Hero;
