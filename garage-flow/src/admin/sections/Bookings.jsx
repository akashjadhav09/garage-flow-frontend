import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import EditBookingDetails from "../Modal/BookingDetails";

const statusStyle = {
  Pending:   "bg-yellow-400 text-white",
  Complete:  "bg-green-500 text-white",
  Completed: "bg-green-500 text-white",
  Repair:    "bg-blue-500 text-white",
  Washing:   "bg-sky-400 text-white",
};

export default function BookingDetails() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch]       = useState("");

  const bookings = [
    { customer: "Akash",  vehicle: "Honda City",     service: "Pending"   },
    { customer: "Rahul",  vehicle: "Maruti Swift",   service: "Complete"  },
    { customer: "Simran", vehicle: "Yamaha FZSS",    service: "Repair"    },
    { customer: "Vikram", vehicle: "Ford EcoSport",  service: "Completed" },
    { customer: "Anjali", vehicle: "Honda Activa",   service: "Washing"   },
    { customer: "Rajesh", vehicle: "Bajaj Pulsar",   service: "Completed" },
  ];

  const filtered = bookings.filter(
    (b) =>
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-800">Manage Bookings</h2>
      </div>

      {/* Search */}
      <div className="relative mb-4 max-w-sm">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 text-xs" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customer or service…"
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Header Row */}
        <div className="grid grid-cols-4 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
          <p>Customer</p>
          <p>Vehicle</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {/* Data Rows */}
        {filtered.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-6 py-3.5 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-0"
          >
            <p className="text-sm font-medium text-gray-800">{item.customer}</p>
            <p className="text-sm text-gray-500">{item.vehicle}</p>

            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-lg w-fit ${statusStyle[item.service] ?? "bg-gray-200 text-gray-700"}`}>
              {item.service}
            </span>

            <button
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.97] transition-all text-white text-xs font-semibold px-4 py-1.5 rounded-lg shadow-sm w-fit cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              View
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-8">No bookings found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">‹</button>
        <button className="px-3 py-1.5 text-sm border border-blue-600 bg-blue-600 text-white rounded-lg">1</button>
        <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">›</button>
      </div>

      {showModal && <EditBookingDetails onClose={() => setShowModal(false)} />}
    </div>
  );
}