import React from "react";

const OurGarageIntroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-lg text-blue-900">
        <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-300 pb-2 mb-4">
          Our Garage
        </h2>

        <p className="mb-2 text-gray-700">
          1234 Main Street, Anytown, TN
        </p>

        <p className="mb-6 text-gray-700">
          Call Us : <span className="font-semibold">9545589666</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
            Call Us
          </button>

          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg shadow">
            Get Direction
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-8 md:mt-0">
        <img
          src="/garage-banner.png" // replace with your image
          alt="garage"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>

    </section>
  );
};

export default OurGarageIntroBanner;