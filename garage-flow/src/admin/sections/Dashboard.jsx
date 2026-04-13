export default function Dashboard() {
  const stats = [
    {
      label: "Total Bookings",
      count: 55,
      bg: "from-sky-400 to-sky-600",
    },
    {
      label: "Pending Bookings",
      count: 20,
      bg: "from-orange-400 to-orange-600",
    },
    {
      label: "Completed",
      count: 35,
      bg: "from-green-400 to-green-600",
    },
  ];

  return (
    <div className="flex justify-center px-6 py-8">
      <div className="flex gap-4 flex-wrap justify-center">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`relative w-44 rounded-2xl p-4 text-white shadow-lg 
              bg-gradient-to-br ${item.bg}
              flex flex-col items-center justify-center text-center
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:shadow-xl
              animate-fadeSlide
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Graph Line Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <polyline
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  points="0,40 20,30 40,35 60,20 80,25 100,10"
                />
              </svg>
            </div>

            {/* Content */}
            <p className="text-sm opacity-90">{item.label}</p>
            <p className="text-2xl font-bold mt-1">{item.count}</p>
          </div>
        ))}

      </div>
    </div>
  );
}