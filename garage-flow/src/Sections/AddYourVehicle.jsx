import { useState, useRef } from "react";
import CustomDropdown from "../Components/CustomDropdown";

const AddYourVehicleSection = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");

  const dateRef = useRef(null);

  const vehicleOptions = [
    "Suzuki",
    "Yamaha",
    "Royal Enfield",
    "BSA",
    "Bajaj",
    "TVS",
    "Hero",
    "Honda",
    "Hundai",
    "Tata",
    "Mahindra",
    "KIA",
    "Maruti Suzuki",
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl my-2">

      <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-300 pb-2 mb-6 text-blue-900">
        Add Your Vehicle
      </h2>

      <div className="flex flex-col gap-6">

        <div>
          <p className="mb-2 font-medium">Select Vehicle Type</p>

          <div className="flex gap-6">

            {/* Car */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="vehicleType"
                value="car"
                checked={vehicleType === "car"}
                onChange={(e) => setVehicleType(e.target.value)}
              />
              <span>Car</span>
            </label>

            {/* Bike */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="vehicleType"
                value="car"
                checked={vehicleType === "bike"}
                onChange={(e) => setVehicleType(e.target.value)}
              />
              <span>Bike</span>
            </label>

          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Select Brand</p>
          <div className="w-full sm:w-64">
            <CustomDropdown
              options={vehicleOptions}
              placeholder="Select Your Vehicle"
              onSelect={setVehicle}
            />
          </div>
        </div>

        <div>
            <p className="mb-2 font-medium">
                Enter Model Name
            </p>

            <div className="w-full sm:w-64">
                <input
                type="text"
                placeholder="Enter Model"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>

        <div>
            <p className="mb-2 font-medium">
                Vehicle Number (Optional)
            </p>

            <div className="w-full sm:w-64">
                <input
                type="text"
                placeholder="Enter Request"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow my-2">
            Add Vehicle
        </button>
       
      </div>
    </section>
  );
};

export default AddYourVehicleSection;