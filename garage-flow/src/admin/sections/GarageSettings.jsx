import { useState } from "react";

export default function GarageSettingSection() {
  const [garageName, setGarageName]   = useState("");
  const [address, setAddress]         = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [phone, setPhone]             = useState("");

  const fields = [
    { label: "Garage Name",    value: garageName,    setter: setGarageName,   placeholder: "e.g. Akash Auto Garage"       },
    { label: "Address",        value: address,        setter: setAddress,      placeholder: "e.g. 1234 Main St, Anytown"   },
    { label: "Phone Number",   value: phone,          setter: setPhone,        placeholder: "e.g. +91 98765 43210"         },
    { label: "Working Hours",  value: workingHours,   setter: setWorkingHours, placeholder: "e.g. Mon–Sat: 9 AM – 7 PM"   },
  ];

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold text-gray-800 mb-6">Garage Settings</h2>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-6 max-w-lg">

        <div className="flex flex-col gap-5">
          {fields.map((f) => (
            <div key={f.label}>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                {f.label}
              </label>
              <input
                type="text"
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                placeholder={f.placeholder}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
              />
            </div>
          ))}
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white font-semibold py-2.5 rounded-xl shadow text-sm">
          Update Settings
        </button>

      </div>
    </div>
  );
}