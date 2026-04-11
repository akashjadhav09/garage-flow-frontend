import { useState } from "react";

const services = [
  {
    serviceType: "Oil Change",
    serviceCharge: 999,
    timeRequired: "1 Hour",
  },
  {
    serviceType: "Wheel Balance",
    serviceCharge: 1499,
    timeRequired: "1.5 Hour",
  },
  {
    serviceType: "Wash",
    serviceCharge: 199,
    timeRequired: "2 Hour",
  },
  {
    serviceType: "General Service",
    serviceCharge: 1899,
    timeRequired: "3 Hour",
  },
];

const SelectYourServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl my-2">

      <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-300 pb-2 mb-6 text-blue-900">
        Select a Service
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-5 border flex flex-col justify-between transition hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300
              ${
                selectedService === service.serviceType
                  ? "border-blue-600 shadow-lg"
                  : "hover:shadow-lg"
              }
            `}
          >
            {/* Content */}
            <div className="text-center">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                {service.serviceType}
              </p>

              <p className="text-xl font-bold text-gray-800">
                ₹ {service.serviceCharge}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {service.timeRequired}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => setSelectedService(service.serviceType)}
              className={`mt-4 py-2 rounded-lg transition cursor-pointer
                ${
                  selectedService === service.serviceType
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
            >
              {selectedService === service.serviceType ? "Selected" : "Select"}
            </button>
          </div>
        ))}

      </div>

    </section>
  );
};

export default SelectYourServiceSection;