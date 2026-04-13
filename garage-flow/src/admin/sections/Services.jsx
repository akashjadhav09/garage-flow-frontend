import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import EditServiceDetails from "../Modal/EditServiceDetail";
import ConfirmPopup from "../Modal/ConfirmPopup";

export default function ServicesDetails() {
  const [showModal, setShowModal] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const bookings = [
    {
      service: "Oil Change",
      Price: "999",
      Duration: "1 Hour",
      statusColor: "bg-yellow-200 text-yellow-800",
      actionColor: "bg-blue-600",
    },
    {
      service: "Rahul",
      Price: "1299",
      Duration: "1 Hour",
      statusColor: "text-gray-700",
      actionColor: "bg-green-600",
    },
    {
      service: "Simran",
      Price: "799",
      Duration: "1 Hour",
      statusColor: "text-gray-700",
      actionColor: "bg-green-600",
    },
    {
      service: "Vikram",
      Price: "899",
      Duration: "1 Hour",
      statusColor: "text-gray-700",
      actionColor: "bg-green-600",
    },
    {
      service: "Anjali",
      Price: "3666",
      Duration: "1 Hour",
      statusColor: "text-gray-700",
      actionColor: "bg-yellow-400",
    },
    {
      service: "Rajesh",
      Price: "899",
      Duration: "1 Hour",
      statusColor: "text-gray-700",
      actionColor: "bg-green-600",
    },
  ];

  const handleEditButtonClick = () => {
    setShowModal(true);
  }

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting:", selectedItem);
    setShowDeletePopup(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Title */}
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Manage Services
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow my-2"
              onClick={handleEditButtonClick}>
                Add Service
            </button>
        </div>

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
          <p>Service</p>
          <p>Price</p>
          <p>Duration</p>
          <p>Actions</p>
        </div>

        {/* Rows */}
        {bookings.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-6 py-4 items-center border-t hover:bg-gray-50 transition"
          >
            <p>{item.service}</p>
            <p>{item.Price}</p>

            {/* Service Badge */}
            <p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${item.statusColor}`}
              >
                {item.Duration}
              </span>
            </p>

            {/* Action Button */}
            <div className="">
                <button
                className={`${item.actionColor} text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90 mx-1 cursor-pointer`}
                onClick = { handleEditButtonClick}
                >
                EDIT
                </button>

                <button
                className={`${item.actionColor} text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90 cursor-pointer`}
                  onClick={() => handleDeleteClick(item)}
                >
                DELETE
                </button>

            </div>
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

        {showModal && (
          <EditServiceDetails onClose={() => setShowModal(false)} />
        )}

        {showDeletePopup && (
          <ConfirmPopup
            message={`Delete ${selectedItem?.service}?`}
            confirmText="Delete"
            onConfirm={handleConfirmDelete}
            onClose={() => setShowDeletePopup(false)}
          />
        )}


    </div>
  );
}