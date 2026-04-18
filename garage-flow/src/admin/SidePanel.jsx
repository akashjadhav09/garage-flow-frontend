export default function AdminSidePanel({ setActivePage }) {

  const navItems = [
    { label: "Dashboard",       key: "dashboard", icon: "📊" },
    { label: "Bookings",        key: "bookings",  icon: "📋" },
    { label: "Services",        key: "services",  icon: "🔧" },
    { label: "Garage Settings", key: "settings",  icon: "⚙️" },
  ];

  return (
    <div className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setActivePage(item.key)}
          className="flex items-center gap-3 text-left text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white px-3 py-2.5 rounded-xl transition-colors duration-150"
        >
          <span className="text-base">{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div className="mt-auto pt-6 border-t border-blue-500 mt-6">
        <button className="flex items-center gap-3 text-left text-sm font-medium text-blue-200 hover:bg-blue-700 hover:text-white px-3 py-2.5 rounded-xl transition-colors w-full">
          <span>🚪</span> Sign Out
        </button>
      </div>
    </div>
  );
}