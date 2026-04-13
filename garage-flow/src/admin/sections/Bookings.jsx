import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import EditBookingDetails from "../Modal/BookingDetails";

export default function BookingDetails() {
  const [showModal, setShowModal] = useState(false);

  const bookings = [
    {
      customer: "Akash",
      vehicle: "Honda City",
      service: "Pending",
      statusColor: "bg-yellow-200 text-yellow-800"
    },
    {
      customer: "Rahul",
      vehicle: "Maruti Swift",
      service: "Complete",
      statusColor: "text-gray-700"
    },
    {
      customer: "Simran",
      vehicle: "Yamaha FZSS",
      service: "Repair",
      statusColor: "text-gray-700"
    },
    {
      customer: "Vikram",
      vehicle: "Ford EcoSport",
      service: "Completed",
      statusColor: "text-gray-700"
    },
    {
      customer: "Anjali",
      vehicle: "Honda Activa",
      service: "Washing",
      statusColor: "text-gray-700"
    },
    {
      customer: "Rajesh",
      vehicle: "Baja Pulsar",
      service: "Completed",
      statusColor: "text-gray-700"
    },
  ];

  function handleViewButtonClick() {
    setShowModal(true);
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Manage Bookings
      </h2>

      {/* Search */}
      <div className="relative mb-4 max-w-md">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search service or customer"
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 bg-gray-100 px-6 py-3 font-semibold text-gray-700">
          <p>Customer</p>
          <p>Vehicle</p>
          <p>Service</p>
          <p>Actions</p>
        </div>

        {/* Rows */}
        {bookings.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-6 py-4 items-center border-t hover:bg-gray-50 transition"
          >
            <p>{item.customer}</p>
            <p>{item.vehicle}</p>

            {/* Service Badge */}
            <p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${item.statusColor}`}
              >
                {item.service}
              </span>
            </p>

            {/* Action Button */}
            <button
              className={`bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90 cursor-pointer`}
              onClick={handleViewButtonClick}
            >
              View
            </button>

             {showModal && (
              <EditBookingDetails onClose={() => setShowModal(false)} />
            )}

          </div>
        ))}

      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-gray-600">Page</span>

        <button className="px-3 py-1 border rounded hover:bg-gray-200">
          {"<"}
        </button>

        <button className="px-3 py-1 border rounded bg-blue-600 text-white">
          1
        </button>

        <button className="px-3 py-1 border rounded hover:bg-gray-200">
          {">"}
        </button>
      </div>

    </div>
  );
}