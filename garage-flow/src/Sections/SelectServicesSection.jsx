import { useState } from "react";

const services = [
  { serviceType: "Oil Change",      serviceCharge: 999,  timeRequired: "1 Hour"   },
  { serviceType: "General Service", serviceCharge: 1999, timeRequired: "3 Hours"  },
  { serviceType: "Repair",          serviceCharge: 1499, timeRequired: "2 Hours"  },
  { serviceType: "Car Wash",        serviceCharge: 499,  timeRequired: "1.5 Hours"},
];

const SelectYourServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-8 my-2">

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-5">Select a Service</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const isSelected = selectedService === service.serviceType;
          return (
            <div
              key={index}
              className={`rounded-xl border-2 p-4 flex flex-col items-center text-center transition-all duration-200 cursor-pointer
                ${isSelected
                  ? "border-blue-600 shadow-md bg-blue-50"
                  : "border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 bg-white"
                }`}
              onClick={() => setSelectedService(service.serviceType)}
            >
              <p className="text-sm font-semibold text-gray-800 mb-1">{service.serviceType}</p>
              <p className="text-lg font-bold text-blue-700 mb-0.5">₹{service.serviceCharge}</p>
              <p className="text-xs text-gray-400 mb-3">{service.timeRequired}</p>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedService(service.serviceType); }}
                className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-colors
                  ${isSelected
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
              >
                {isSelected ? "Selected ✓" : "Select"}
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default SelectYourServiceSection;