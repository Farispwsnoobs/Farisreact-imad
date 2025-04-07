import React from "react";
import illustration from "../assets/illustration2.svg"; 

function CallToAction() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between space-x-12">
        {/* Texte et description */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-gray-900">Let’s make things happen</h2>
          <p className="mt-4 text-gray-600">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="mt-6 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition">
            Get your free proposal
          </button>
        </div>

        {/* Illustration SVG */}
        <div className="flex items-center space-x-4">
          <img src={illustration} alt="Illustration" className="w-48 h-48" /> {/* Utilise l'illustration SVG ici */}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
