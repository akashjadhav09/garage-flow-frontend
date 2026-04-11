import { useState, useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import CustomDropdown from "../Components/CustomDropdown";

const BookServiceSection = () => {
  const [date, setDate] = useState("2024-04-18");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const dateRef = useRef(null);

  const vehicleOptions = [
    "Honda City",
    "Maruti Suzuki Dzire",
    "Splendor",
    "Activa",
    "Shine",
    "Unicorn",
    "Hyundai i20",
    "Maruti Swift",
    "Tata Nexon",
    "Mahindra Thar",
    "Toyota Fortuner",
  ];

  const vehicleServiceOptions = [
    "General Service",
    "Oil change",
    "Denting & Painting",
    "Engine Service",
    "Wheel Care",
    "Suspension and Handling",
    "Cleaning/Detailing",
    "AC Service",
    "Braking System",
    "Electrical & Electronics",
  ];

  // ✅ Time Slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl my-2">

      <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-300 pb-2 mb-6 text-blue-900">
        Book Your Service
      </h2>

      <div className="flex flex-col gap-6">

        {/* Vehicle */}
        <div>
          <p className="mb-2 font-medium">Select Vehicle</p>
          <div className="w-full sm:w-64">
            <CustomDropdown
              options={vehicleOptions}
              placeholder="Select Your Vehicle"
              onSelect={setVehicle}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <p className="mb-2 font-medium">Select Service</p>
          <div className="w-full sm:w-64">
            <CustomDropdown
              options={vehicleServiceOptions}
              placeholder="Select Service"
              onSelect={setService}
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <p className="mb-2 font-medium">Select Date</p>

          <div
            onClick={() => dateRef.current?.showPicker()}
            className="w-full sm:w-64 relative flex items-center justify-between bg-white border rounded-lg px-3 py-2.5 cursor-pointer shadow"
          >
            <span className="text-gray-700 font-medium">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>

            <FaCalendar className="text-gray-500" />

            <input
              ref={dateRef}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* ✅ Time Slots */}
        <div>
          <p className="mb-2 font-medium">Select Time Slot</p>

          <div className="flex flex-wrap gap-3 max-w-md">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setTimeSlot(slot)}
                className={`px-4 py-2 rounded-lg border transition cursor-pointer
                  ${
                    timeSlot === slot
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 hover:bg-blue-100"
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        
        <div>
            <p className="mb-2 font-medium">
                Any Specific Request? (Optional)
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
            Confirm Booking
        </button>
       
      </div>
    </section>
  );
};

export default BookServiceSection;