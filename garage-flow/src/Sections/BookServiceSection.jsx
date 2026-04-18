import { useState, useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import CustomDropdown from "../Components/CustomDropdown";

const vehicleOptions = [
  "Honda City", "Maruti Suzuki Dzire", "Splendor",
  "Activa", "Shine", "Unicorn", "Hyundai i20",
  "Maruti Swift", "Tata Nexon", "Mahindra Thar", "Toyota Fortuner",
];

const vehicleServiceOptions = [
  "General Service", "Oil change", "Denting & Painting",
  "Engine Service", "Wheel Care", "Suspension and Handling",
  "Cleaning/Detailing", "AC Service", "Braking System", "Electrical & Electronics",
];

const timeSlots = [
  "10:00 AM", "⚡ 1",  "12:00 PM",
  "⏰ 1:00 PM", "🌙 3:00 PM",
];

// Cleaner flat slot labels
const cleanTimeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "03:00 PM", "05:00 PM",
];

const BookServiceSection = () => {
  const [date, setDate]         = useState("2024-04-20");
  const [vehicle, setVehicle]   = useState("Honda City");
  const [service, setService]   = useState("Oil Change");
  const [timeSlot, setTimeSlot] = useState("");
  const [note, setNote]         = useState("");

  const dateRef = useRef(null);

  return (
    <section className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-8 my-2">

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-5">Booking Page</h2>

      <div className="flex flex-col gap-5">

        {/* Vehicle + Service summary */}
        <div className="bg-gray-50 rounded-xl border border-gray-100 px-4 py-3 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Vehicle</span>
            <div className="w-44">
              <CustomDropdown
                options={vehicleOptions}
                placeholder="Select Vehicle"
                onSelect={setVehicle}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Service</span>
            <div className="w-44">
              <CustomDropdown
                options={vehicleServiceOptions}
                placeholder="Select Service"
                onSelect={setService}
              />
            </div>
          </div>
        </div>

        {/* Date */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Select Date</p>
          <div
            onClick={() => dateRef.current?.showPicker()}
            className="relative flex items-center justify-between bg-white border border-gray-300 hover:border-blue-400 rounded-lg px-3 py-2.5 cursor-pointer max-w-xs transition-colors"
          >
            <span className="text-sm text-gray-700 font-medium">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "2-digit", month: "short", year: "numeric",
              })}
            </span>
            <FaCalendar className="text-gray-400 text-sm" />
            <input
              ref={dateRef}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Select Time Slot</p>
          <div className="flex flex-wrap gap-2">
            {cleanTimeSlots.map((slot, i) => (
              <button
                key={i}
                onClick={() => setTimeSlot(slot)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer
                  ${timeSlot === slot
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Special Request */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Any specific request? (Optional)</p>
          <textarea
            rows={2}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Your specialty..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        {/* Confirm */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white font-semibold py-3 rounded-xl shadow text-sm">
          Confirm Booking
        </button>

      </div>
    </section>
  );
};

export default BookServiceSection;