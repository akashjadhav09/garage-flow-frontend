const bookings = [
  {
    selectedServiceType: "Oil Change",
    selectedVehicleModel: "Honda Civic",
    selectedDate: "15/05/2030",
  },
  {
    selectedServiceType: "Wheel Balance",
    selectedVehicleModel: "Honda City",
    selectedDate: "15/05/2030",
  },
  {
    selectedServiceType: "Wash",
    selectedVehicleModel: "Honda Amaze",
    selectedDate: "15/05/2030",
  },
];

const MyBookingsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 md:px-16 py-12 rounded-2xl my-2">

      <h2 className="text-2xl md:text-3xl font-bold border-b border-blue-300 pb-2 mb-6 text-blue-900">
        My Bookings
      </h2>

      <div className="flex flex-col gap-4">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-4 rounded-2xl flex items-center justify-between shadow-sm"
          >
            {/* LEFT */}
            <div>
              <p className="font-semibold text-blue-900">
                {booking.selectedServiceType}
              </p>
              <p className="text-gray-700">
                {booking.selectedVehicleModel}
              </p>
              <p className="text-gray-500 text-sm">
                {booking.selectedDate}
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow">
                Pending
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MyBookingsSection;