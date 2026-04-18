import React, { useState } from "react";
import CustomDropdown from "../Components/CustomDropdown";

const serviceCards = [
  { title: "Oil Change",      price: "₹999",  image: "src/assets/Bike-3.jpg" },
  { title: "Repair",          price: "₹1499", image: "src/assets/Bike-2.jpg" },
  { title: "Car Wash",        price: "₹499",  image: "src/assets/Bike wash.jpg" },
  { title: "General Service", price: "₹1999", image: "src/assets/Bike-GS.jpg" },
];

const steps = [
  { num: 1, label: "Add Your Vehicle" },
  { num: 2, label: "Choose Service"   },
  { num: 3, label: "Book Your Slot"   },
];

const HomeIntroBanner = () => {
  const [vehicle, setVehicle] = useState("");

  const vehicleOptions = [
    "Honda City", "Hyundai i20", "Maruti Swift",
    "Tata Nexon", "Mahindra Thar", "Toyota Fortuner",
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* ── Hero ── */}
      <div
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-8 pb-6 gap-4"
        style={{ background: "linear-gradient(120deg, #dbeafe 0%, #bfdbfe 100%)" }}
      >
        {/* Left */}
        <div className="max-w-xs">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug mb-1">
            Book Your Vehicle Service Easily
          </h1>
          <p className="text-gray-500 text-xs mb-5">
            Your trusted most vehicle team point 0!
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-44">
              <CustomDropdown
                options={vehicleOptions}
                placeholder="Select Your Vehicle"
                onSelect={(v) => setVehicle(v)}
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-semibold px-4 py-2 rounded-lg shadow text-sm whitespace-nowrap">
              Book Service
            </button>
          </div>
        </div>

        {/* Right – car image */}
        <div className="flex-shrink-0">
          <img
            src="src/assets/Home-into-banner-1.jpg"
            alt="Service vehicle"
            className="w-56 md:w-72 object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* ── Service Cards Strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 md:px-10 py-5 bg-white">
        {serviceCards.map((svc, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
          >
            <img src={svc.image} alt={svc.title} className="w-full h-20 object-cover" />
            <div className="py-2 px-2">
              <p className="text-xs font-semibold text-blue-900">{svc.title}</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{svc.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Steps ── */}
      <div className="flex items-center justify-center gap-6 px-6 py-4 bg-gray-50 border-t border-gray-100">
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {step.num}
              </span>
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden sm:block flex-1 h-px bg-blue-200 max-w-[40px]" />
            )}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
};

export default HomeIntroBanner;