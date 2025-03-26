import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard-container bg-gray-100 min-h-screen p-8">
            <h1 className="dashboard-heading text-4xl font-semibold text-center mb-8">Welcome to Your Dashboard</h1>
            <div className="dashboard-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-medium mb-4">Upcoming Appointments</h2>
                    <p className="text-lg">You have 3 upcoming appointments this week.</p>
                </div>
                <div className="card bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-medium mb-4">Notifications</h2>
                    <p className="text-lg">No new notifications.</p>
                </div>
                <div className="card bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-medium mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-lg">
                        <li><a href="/appointment" className="text-blue-600 hover:text-blue-800">View Appointments</a></li>
                        <li><a href="/patient" className="text-blue-600 hover:text-blue-800">Go to Patient Portal</a></li>
                        <li><a href="/doctor" className="text-blue-600 hover:text-blue-800">Go to Doctor Portal</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
