import React, { useState } from "react";
import CustomDropdown from "../Components/CustomDropdown";

const HomeIntroBanner = () => {
  const [vehicle, setVehicle] = useState("");

  const vehicleOptions = [
    "Honda City",
    "Hyundai i20",
    "Maruti Swift",
    "Tata Nexon",
    "Mahindra Thar",
    "Toyota Fortuner",
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">

      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Book Your Vehicle Service Easily
        </h1>
        <p className="text-gray-600 mb-6">
          Your trusted service partner for all your vehicle needs
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-4">

          <div className="w-full sm:w-64">
            <CustomDropdown
              options={vehicleOptions}
              placeholder="Select Your Vehicle"
              onSelect={(value) => setVehicle(value)}
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
            Book Service
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 flex items-center">
        <img
          src="src/assets/Home-into-banner-1.jpg"
          alt="car"
          className="w-[350px] md:w-[420px]"
        />
        <img
          src="src/assets/Home-into-banner-2.jpg"
          alt="car"
          className="w-[350px] md:w-[420px]"
        />
      </div>
    </section>
  );
};

export default HomeIntroBanner;