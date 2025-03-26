import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-indigo-600 p-4 shadow-lg">
            <div className="navbar-brand text-white text-2xl font-semibold">
                <a href="/">Doctor Office App</a>
            </div>
            <ul className="navbar-links flex space-x-6 mt-2">
                <li><a href="/" className="text-white hover:text-indigo-300">Home</a></li>
                <li><a href="/patient" className="text-white hover:text-indigo-300">Patient Portal</a></li>
                <li><a href="/doctor" className="text-white hover:text-indigo-300">Doctor Portal</a></li>
                <li><a href="/appointment" className="text-white hover:text-indigo-300">Appointments</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
