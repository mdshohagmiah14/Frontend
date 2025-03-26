import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-4">Welcome to the Doctor Office App</h1>
            <p className="text-lg text-center text-gray-700 mb-6">Your one-stop platform for managing medical appointments.</p>
            
            <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-x-6 sm:space-y-0">
                <a
                    href="/patient"
                    className="bg-indigo-500 text-white py-2 px-6 rounded-lg text-lg transition transform hover:bg-indigo-600 hover:scale-105"
                >
                    Patient Portal
                </a>
                <a
                    href="/doctor"
                    className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg transition transform hover:bg-green-600 hover:scale-105"
                >
                    Doctor Portal
                </a>
                <a
                    href="/appointment"
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg transition transform hover:bg-blue-600 hover:scale-105"
                >
                    Appointments
                </a>
            </div>
        </div>
    );
};

export default HomePage;
