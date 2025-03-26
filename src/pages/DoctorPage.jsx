import React from 'react';

const DoctorPage = () => {
    return (
        <div className="doctor-page bg-gray-50 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">Doctor Dashboard</h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                Manage your patients, schedule appointments, and update availability.
            </p>
            <ul className="doctor-options space-y-4 text-lg text-gray-600 list-inside">
                <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    View your daily schedule
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    Update your availability
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    Review patient medical records
                </li>
            </ul>
        </div>
    );
};

export default DoctorPage;
