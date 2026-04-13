import { FaTimes } from "react-icons/fa";

export default function EditBookingDetails({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* Modal Box */}
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-900">
            Booking Details
          </h2>

          <button onClick={onClose}>
            <FaTimes className="cursor-pointer text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="customer-deatails__wrapper flex flex-col gap-4">
          <div><label>Name :</label> <span>Akash</span></div>
          <div><label>Contact :</label> <span>9545578624</span></div>
          <div><label>Vehicle :</label> <span>Honda Unicorn</span></div>
          <div><label>Service :</label> <span>Oil Change</span></div>
          <div><label>Date :</label> <span>April 20, 2024</span></div>
          
          <div>
                <p className="mb-2 font-medium">
                    User Note
                </p>

                <div className="w-full sm:w-64">
                    <input
                    type="text"
                    placeholder="Enter Note"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
        </div>

        <div className="button-container flex items-center justify-end gap-3 my-2 mt-4">
            <button className="mark-as-complete-btn bg-blue-600 hover:bg-blue-700 text-white p-2 rounded cursor-pointer">Mark As Complete</button>
            <button className="close-btn bg-blue-600 hover:bg-blue-700 text-white p-2  rounded cursor-pointer" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}