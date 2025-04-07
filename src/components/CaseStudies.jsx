import React from "react";

function CaseStudies() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Titre et description */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-green-400">Case Studies</h2>
          <p className="text-gray-600 ml-4 flex-1">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Grille des études de cas */}
        <div className="grid grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-black text-white rounded-lg">
            <h3 className="text-xl font-bold">For a local restaurant</h3>
            <p className="mt-4">We implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <button className="mt-4 text-green-400 border-b-2 border-green-400 hover:text-green-500 hover:border-green-500">
              Learn more
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-black text-white rounded-lg">
            <h3 className="text-xl font-bold">For a B2B software company</h3>
            <p className="mt-4">We developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.</p>
            <button className="mt-4 text-green-400 border-b-2 border-green-400 hover:text-green-500 hover:border-green-500">
              Learn more
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-black text-white rounded-lg">
            <h3 className="text-xl font-bold">For a national retail chain</h3>
            <p className="mt-4">We created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <button className="mt-4 text-green-400 border-b-2 border-green-400 hover:text-green-500 hover:border-green-500">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
