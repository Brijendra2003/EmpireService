import React from "react";

import herosectionImage from "/Images/hero1.png";

const Hero = () => {
  return (
    <section className="hero-section flex justify-between align-center bg-gray-100 py-10 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Professional Home Appliance Repair Services
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Expert repair services for AC, TV, Refrigerator, Washing Machine and
            Microwave. Trusted technicians serving the Vasai-Virar area with
            quick and reliable solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Book Technician
            </button>

            <button className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
              Our Services
            </button>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            ✔ Same Day Service &nbsp; | &nbsp; ✔ Certified Technicians &nbsp; |
            &nbsp; ✔ Affordable Pricing
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={herosectionImage}
            alt="Appliance Repair"
            className="w-full z-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
