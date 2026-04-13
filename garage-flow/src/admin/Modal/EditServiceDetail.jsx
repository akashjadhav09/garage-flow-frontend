import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function EditServiceDetails({ onClose }) {
    const [price, setPrice] = useState("");

    const handlePriceChange = (e) => {
    const value = e.target.value;

    // Allow only digits
    if (/^\d*$/.test(value)) {
        setPrice(value);
    }
    };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* Modal Box */}
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-900">
            Service Details
          </h2>

          <button onClick={onClose}>
            <FaTimes className="cursor-pointer text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="customer-deatails__wrapper flex flex-col gap-4">
          <div>
                <p className="mb-2 font-medium">
                    Service Name
                </p>

                <div className="w-full sm:w-64">
                    <input
                    type="text"
                    placeholder="Enter Service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
          
            <div>
                <p className="mb-2 font-medium">
                    Price
                </p>

                <div className="w-full sm:w-64">
                    <input
                        type="text"
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Enter Price"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

             <div>
                <p className="mb-2 font-medium">
                    Duration
                </p>

                <div className="w-full sm:w-64">
                    <input
                    type="text"
                    placeholder="Enter Duration"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

        </div>

        <div className="button-container flex items-center justify-end gap-3 my-2 mt-4">
            <button className="mark-as-complete-btn bg-blue-600 hover:bg-blue-700 text-white p-2 rounded cursor-pointer">Save Changes</button>
            <button className="close-btn bg-blue-600 hover:bg-blue-700 text-white p-2  rounded cursor-pointer"
                onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
}