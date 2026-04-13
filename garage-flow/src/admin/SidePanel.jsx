export default function AdminSidePanel({ setActivePage }) {
  return (
    <div className="bg-blue-600 h-full">
      <div className="flex flex-col gap-2 text-white">

        <button
          onClick={() => setActivePage("dashboard")}
          className="text-left hover:bg-blue-700 p-2 rounded"
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage("bookings")}
          className="text-left hover:bg-blue-700 p-2 rounded"
        >
          Bookings
        </button>

        <button
          onClick={() => setActivePage("services")}
          className="text-left hover:bg-blue-700 p-2 rounded"
        >
          Services
        </button>

        <button
          onClick={() => setActivePage("settings")}
          className="text-left hover:bg-blue-700 p-2 rounded"
        >
          Garage Settings
        </button>

        <button
          className="text-left hover:bg-blue-700 p-2 rounded"
        >
          Signout
        </button>

      </div>
    </div>
  );
}