import React from 'react';

const DoctorPortal = () => {
    return (
        <div className="doctor-portal bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
            <h1 className="portal-heading text-3xl font-semibold mb-6">Welcome to the Doctor Portal</h1>
            <div className="portal-content bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <ul className="portal-options space-y-4 text-lg">
                    <li className="text-blue-600 hover:text-blue-800 cursor-pointer">View your patients</li>
                    <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Manage your availability</li>
                    <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Schedule and edit appointments</li>
                    <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Access patient medical records</li>
                </ul>
            </div>
        </div>
    );
};

export default DoctorPortal;
