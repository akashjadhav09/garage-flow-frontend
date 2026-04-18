export default function Dashboard() {
  const stats = [
    { label: "Total Bookings",   count: 55, icon: "📋", color: "text-sky-600",    bg: "bg-sky-50",    border: "border-sky-200"    },
    { label: "Pending Bookings", count: 20, icon: "⏳", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
    { label: "Completed",        count: 35, icon: "✅", color: "text-green-600",  bg: "bg-green-50",  border: "border-green-200"  },
  ];

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border ${item.border} shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow duration-200`}
          >
            <div className={`${item.bg} rounded-xl w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0`}>
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{item.label}</p>
              <p className={`text-3xl font-extrabold ${item.color}`}>{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity placeholder */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Recent Bookings</h3>
        <div className="flex flex-col gap-3">
          {[
            { name: "Akash",  vehicle: "Honda City",    service: "Oil Change",  status: "Pending",   color: "bg-yellow-400" },
            { name: "Rahul",  vehicle: "Maruti Swift",  service: "Car Wash",    status: "Completed", color: "bg-green-500"  },
            { name: "Simran", vehicle: "Yamaha FZSS",   service: "Repair",      status: "Pending",   color: "bg-yellow-400" },
          ].map((b, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div>
                <p className="text-sm font-semibold text-gray-800">{b.name}</p>
                <p className="text-xs text-gray-400">{b.vehicle} · {b.service}</p>
              </div>
              <span className={`${b.color} text-white text-xs font-semibold px-3 py-1 rounded-lg`}>{b.status}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}