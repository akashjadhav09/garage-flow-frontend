import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import EditServiceDetails from "../Modal/EditServiceDetail";
import ConfirmPopup from "../Modal/ConfirmPopup";

export default function ServicesDetails() {
  const [showModal, setShowModal]         = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedItem, setSelectedItem]   = useState(null);
  const [search, setSearch]               = useState("");

  const services = [
    { service: "Oil Change",      Price: "999",  Duration: "1 Hour"   },
    { service: "General Service", Price: "1899", Duration: "3 Hours"  },
    { service: "Car Wash",        Price: "499",  Duration: "1.5 Hours"},
    { service: "Repair",          Price: "1299", Duration: "2 Hours"  },
    { service: "Wheel Balance",   Price: "799",  Duration: "1 Hour"   },
    { service: "AC Service",      Price: "3666", Duration: "2 Hours"  },
  ];

  const filtered = services.filter((s) =>
    s.service.toLowerCase().includes(search.toLowerCase())
  );

  const handleConfirmDelete = () => {
    console.log("Deleting:", selectedItem);
    setShowDeletePopup(false);
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-800">Manage Services</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
        >
          + Add Service
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4 max-w-sm">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 text-xs" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search service…"
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Header Row */}
        <div className="grid grid-cols-4 bg-gray-50 px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
          <p>Service</p>
          <p>Price (₹)</p>
          <p>Duration</p>
          <p>Actions</p>
        </div>

        {/* Data Rows */}
        {filtered.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-6 py-3.5 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-0"
          >
            <p className="text-sm font-medium text-gray-800">{item.service}</p>
            <p className="text-sm text-gray-600 font-semibold">₹{item.Price}</p>
            <p className="text-sm text-gray-500">{item.Duration}</p>

            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 active:scale-[0.97] transition-all text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => { setSelectedItem(item); setShowDeletePopup(true); }}
                className="bg-red-500 hover:bg-red-600 active:scale-[0.97] transition-all text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-8">No services found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">‹</button>
        <button className="px-3 py-1.5 text-sm border border-blue-600 bg-blue-600 text-white rounded-lg">1</button>
        <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">›</button>
      </div>

      {showModal && <EditServiceDetails onClose={() => setShowModal(false)} />}
      {showDeletePopup && (
        <ConfirmPopup
          message={`Delete "${selectedItem?.service}"?`}
          confirmText="Delete"
          onConfirm={handleConfirmDelete}
          onClose={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
}