import { useState } from "react";

import AdminSidePanel from "../admin/SidePanel";
import AdminPanelNavbar from "./AdminNavbar";

import Dashboard from "../admin/sections/Dashboard";
import BookingDetails from "./sections/Bookings";
import ServicesDetails from "./sections/Services";
import GarageSettingSection from "./sections/GarageSettings";

// Example components


export default function AdminPanelLayout() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderComponent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "bookings":
        return <BookingDetails />;
      case "services":
        return <ServicesDetails />;
      case "settings":
        return <GarageSettingSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col">

      {/* ✅ Navbar (fixed top) */}
      <AdminPanelNavbar />

      {/* ✅ Main Layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* ✅ Sidebar (left) */}
        <div className="w-64 bg-blue-600 text-white p-4">
          <AdminSidePanel setActivePage={setActivePage} />
        </div>

        {/* ✅ Dynamic Content (center) */}
        <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          {renderComponent()}
        </div>

      </div>
    </div>
  );
}