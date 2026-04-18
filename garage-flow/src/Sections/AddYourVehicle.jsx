import { useState, useRef } from "react";
import CustomDropdown from "../Components/CustomDropdown";

const vehicleOptions = [
  "Suzuki", "Yamaha", "Royal Enfield", "BSA", "Bajaj",
  "TVS", "Hero", "Honda", "Hyundai", "Tata", "Mahindra",
  "KIA", "Maruti Suzuki",
];

const AddYourVehicleSection = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [vehicle, setVehicle]         = useState("");
  const [model, setModel]             = useState("");
  const [vehicleNo, setVehicleNo]     = useState("");

  return (
    <section className="bg-white rounded-2xl shadow-md px-8 md:px-12 py-8 my-2">

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        Add Your Vehicle
      </h2>

      <div className="flex flex-col gap-5 max-w-sm mx-auto">

        {/* Vehicle Type */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Select Vehicle Type</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="vehicleType"
                value="car"
                checked={vehicleType === "car"}
                onChange={(e) => setVehicleType(e.target.value)}
                className="accent-blue-600"
              />
              🚗 Car
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="vehicleType"
                value="bike"
                checked={vehicleType === "bike"}
                onChange={(e) => setVehicleType(e.target.value)}
                className="accent-blue-600"
              />
              🏍️ Bike
            </label>
          </div>
        </div>

        {/* Brand */}
        <div>
          <CustomDropdown
            options={vehicleOptions}
            placeholder="Select Brand"
            onSelect={setVehicle}
          />
        </div>

        {/* Model */}
        <div>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter Model"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Vehicle Number */}
        <div>
          <input
            type="text"
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            placeholder="Vehicle Number (Optional)"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white font-semibold py-2.5 rounded-lg shadow text-sm">
          Save Vehicle
        </button>

      </div>
    </section>
  );
};

export default AddYourVehicleSection;