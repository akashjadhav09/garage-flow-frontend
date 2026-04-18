const bookings = [
  {
    selectedServiceType:  "Oil Change",
    selectedVehicleModel: "Honda City",
    selectedDate:         "April  20, 2024",
    status:               "Pending",
  },
  {
    selectedServiceType:  "General Service",
    selectedVehicleModel: "Maruti Swift",
    selectedDate:         "April 15, 2024",
    status:               "Completed",
  },
  {
    selectedServiceType:  "Wheel Balance",
    selectedVehicleModel: "Honda Civic",
    selectedDate:         "May 10, 2024",
    status:               "Pending",
  },
];

const statusStyle = {
  Pending:   "bg-yellow-400 text-white",
  Completed: "bg-green-500 text-white",
  Cancelled: "bg-red-500 text-white",
};

const MyBookingsSection = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-8 my-2">

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-5">My Bookings</h2>

      <div className="flex flex-col gap-3">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl px-4 py-4 border border-gray-100"
          >
            {/* Left */}
            <div>
              <p className="font-semibold text-gray-800 text-sm">{booking.selectedServiceType}</p>
              <p className="text-gray-500 text-sm mt-0.5">{booking.selectedVehicleModel}</p>
              <p className="text-gray-400 text-xs mt-0.5">{booking.selectedDate}</p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap
                ${statusStyle[booking.status] ?? "bg-gray-400 text-white"}`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MyBookingsSection;