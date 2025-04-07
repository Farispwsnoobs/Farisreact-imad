import React from "react";

function ServicesCards() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        
        <div className="grid grid-cols-2 gap-8">
          
          <div className="p-6 rounded-lg bg-white border border-gray-300 flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="SEO" className="h-12 w-12" />
              <h3 className="text-xl font-bold text-green-400">Search engine optimization</h3>
            </div>
            <p className="mt-4 text-gray-700">Boost your website's visibility and ranking with our proven SEO strategies.</p>
            <button className="mt-4 text-green-400 border-b-2 border-green-400 hover:text-green-500 hover:border-green-500">
              Learn more
            </button>
          </div>

          
          <div className="p-6 rounded-lg bg-green-400 text-white flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="PPC" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Pay-per-click advertising</h3>
            </div>
            <p className="mt-4">Maximize your ROI with targeted PPC campaigns tailored to your business.</p>
            <button className="mt-4 text-white border-b-2 border-white hover:text-green-400 hover:border-green-400">
              Learn more
            </button>
          </div>

          
          <div className="p-6 rounded-lg bg-white border border-gray-300 flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="Email Marketing" className="h-12 w-12" />
              <h3 className="text-xl font-bold text-green-400">Email Marketing</h3>
            </div>
            <p className="mt-4 text-gray-700">Engage and retain customers with personalized email campaigns that drive conversions.</p>
            <button className="mt-4 text-green-400 border-b-2 border-green-400 hover:text-green-500 hover:border-green-500">
              Learn more
            </button>
          </div>

          
          <div className="p-6 rounded-lg bg-black text-white flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="Social Media" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Social Media Marketing</h3>
            </div>
            <p className="mt-4">Build your brand and engage with your audience on popular social media platforms.</p>
            <button className="mt-4 text-white border-b-2 border-white hover:text-green-400 hover:border-green-400">
              Learn more
            </button>
          </div>

          
          <div className="p-6 rounded-lg bg-green-400 text-white flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="Content Creation" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Content Creation</h3>
            </div>
            <p className="mt-4">Create compelling content that resonates with your audience and enhances your brand.</p>
            <button className="mt-4 text-white border-b-2 border-white hover:text-green-400 hover:border-green-400">
              Learn more
            </button>
          </div>

          
          <div className="p-6 rounded-lg bg-black text-white flex flex-col justify-between">
            <div className="flex items-center space-x-4">
              <img src="path_to_icon" alt="Analytics" className="h-12 w-12" />
              <h3 className="text-xl font-bold">Analytics and Tracking</h3>
            </div>
            <p className="mt-4">Measure, track, and optimize your digital marketing efforts with powerful analytics tools.</p>
            <button className="mt-4 text-white border-b-2 border-white hover:text-green-400 hover:border-green-400">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
