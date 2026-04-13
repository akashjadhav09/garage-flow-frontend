export default function GarageSettingSection() {
    return(
        <>
            <div className="bg-gray-100 min-h-screen p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    Garage Settings
                </h2>

                <div>
                    <p className="mb-2 font-medium">
                        Garage Name
                    </p>

                    <div className="w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Enter Garage Name"
                            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <p className="mb-2 font-medium">
                        Address 
                    </p>

                    <div className="w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Enter Address"
                            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <p className="mb-2 font-medium">
                        Working Hours 
                    </p>

                    <div className="w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Enter Working Hours"
                            className="w-full px-4 py-2 border mb-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow my-2">
                    Update Settings
                </button>

            </div>
        </>
    )
}